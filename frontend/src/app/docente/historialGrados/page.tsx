"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, FileText, Search, ArrowLeft, Users, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react"
import { FaClockRotateLeft } from "react-icons/fa6"
import { useAuth } from "@/hooks/useAuth"
import { getDocenteById, getGradosByDocenteId } from "@/actions/docentesMethods/docentesMethods"
import { getEsquelaByGrupo } from "@/actions/calificaciones/esquelasHeadsMethods/esquelasHeadMethods"
import { GrupoEscolar } from "@/interfaces"
import Header from "@/components/Header"
import { useRouter } from "next/navigation"
import { motion } from 'framer-motion'

interface GrupoHistorial extends GrupoEscolar {
  esGuia: boolean
  esMateria: boolean
  materias?: string
}

export default function HistorialGradosPage() {
  const [grupos, setGrupos] = useState<GrupoHistorial[]>([])
  const [searchYear, setSearchYear] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const ITEMS_PER_PAGE = 6
  const router = useRouter()
  const { rol, docente } = useAuth()

  useEffect(() => {
    if (!docente?.id) return;
    const fetchHistorial = async (docenteId: number) => {
      try {
        const [resGuia, resMaterias] = await Promise.all([
          getDocenteById(docenteId),
          getGradosByDocenteId(docenteId),
        ])

        const gruposMap = new Map<number, GrupoHistorial>()
        const estudiantesPorGrupo = new Map<number, Set<number>>()
        const materiasPorGrupo = new Map<number, Set<string>>()

        const agregarEstudiantes = (grupoId: number, relaciones: any[]) => {
          if (!estudiantesPorGrupo.has(grupoId)) estudiantesPorGrupo.set(grupoId, new Set())
          const acumulado = estudiantesPorGrupo.get(grupoId)!

          relaciones.forEach((rel: any) => {
            (rel?.gruposConEstudiantes || []).forEach((item: any) => {
              const id = Number(item?.estudiante?.id)
              if (Number.isFinite(id)) acumulado.add(id)
            })
          })
        }

        // 1️⃣ Grupos donde el docente imparte alguna materia (aunque no sea el guía)
        const relaciones: any[] = Array.isArray(resMaterias?.grupoAsignaturaDocente)
          ? resMaterias.grupoAsignaturaDocente
          : []

        relaciones.forEach((relacion: any) => {
          const grupo = relacion?.grupo
          if (!grupo || grupo.deleted_at) return

          const grupoId = Number(grupo.id)

          agregarEstudiantes(grupoId, [relacion])

          if (!materiasPorGrupo.has(grupoId)) materiasPorGrupo.set(grupoId, new Set())
          if (relacion?.asignatura?.asignatura) {
            materiasPorGrupo.get(grupoId)!.add(relacion.asignatura.asignatura)
          }

          const existente = gruposMap.get(grupoId)
          if (existente) {
            existente.grupoAsignaturaDocente = [...(existente.grupoAsignaturaDocente || []), relacion]
            existente.esMateria = true
          } else {
            gruposMap.set(grupoId, {
              id: grupo.id,
              grado: grupo.grado,
              seccion: grupo.seccion,
              numero_estudiantes: 0,
              numero_estudiantes_inactivos: 0,
              numero_materias: 0,
              organizacionEscolar: grupo.organizacionEscolar,
              docenteGuia: grupo.docenteGuia,
              grupoAsignaturaDocente: [relacion],
              esquelaHead: undefined,
              esGuia: false,
              esMateria: true,
            })
          }
        })

        // 2️⃣ Grupos donde el docente es guía (el backend ya trae la esquela)
        const guiados: any[] = (resGuia?.grupos || []).filter((g: any) => g?.organizacionEscolar !== null)

        guiados.forEach((g: any) => {
          const grupoId = Number(g.id)
          agregarEstudiantes(grupoId, g.grupoAsignaturaDocente || [])

          const existente = gruposMap.get(grupoId)
          if (existente) {
            existente.esGuia = true
            if (!existente.esquelaHead?.id && g.esquelaHead?.id) {
              existente.esquelaHead = g.esquelaHead
            }
          } else {
            gruposMap.set(grupoId, {
              id: g.id,
              grado: g.grado,
              seccion: g.seccion,
              numero_estudiantes: 0,
              numero_estudiantes_inactivos: 0,
              numero_materias: 0,
              organizacionEscolar: g.organizacionEscolar,
              docenteGuia: g.docenteGuia,
              grupoAsignaturaDocente: g.grupoAsignaturaDocente || [],
              esquelaHead: g.esquelaHead,
              esGuia: true,
              esMateria: false,
            })
          }
        })

        // 3️⃣ Completar contadores, materias y esquela; quedarnos solo con años finalizados
        const historial: GrupoHistorial[] = []

        for (const grupo of gruposMap.values()) {
          const grupoId = Number(grupo.id)

          grupo.numero_estudiantes = estudiantesPorGrupo.get(grupoId)?.size || 0

          const materiasImpartidas = Array.from(materiasPorGrupo.get(grupoId) || [])
          grupo.materias = materiasImpartidas.join(', ')

          const materiasDelGrupo = new Set(
            (grupo.grupoAsignaturaDocente || [])
              .map((rel: any) => rel?.asignatura?.id)
              .filter((id: any) => Number.isFinite(Number(id)))
          )
          grupo.numero_materias = materiasDelGrupo.size || materiasImpartidas.length

          if (!grupo.esquelaHead?.id) {
            try {
              const esquela = await getEsquelaByGrupo(grupoId)
              if (esquela?.id) grupo.esquelaHead = esquela
            } catch {
              // sin esquela: el botón queda deshabilitado
            }
          }

          if (grupo.organizacionEscolar && !grupo.organizacionEscolar.anio_lectivo?.isActive) {
            historial.push(grupo)
          }
        }

        historial.sort(
          (a, b) =>
            (b.organizacionEscolar?.anio_lectivo?.anio_lectivo ?? 0) -
            (a.organizacionEscolar?.anio_lectivo?.anio_lectivo ?? 0)
        )

        setGrupos(historial)
      } catch (error) {
        console.error("Error fetching historial del docente:", error)
      }
    }

    if (rol !== 'Docente') return
    if (docente?.id) {
      fetchHistorial(docente.id)
      return
    }
    const storedUserId = localStorage.getItem('userId')
    if (storedUserId) {
      fetchHistorial(Number(storedUserId))
    }
  }, [docente?.id, rol])

  const filteredHistoricalClasses = grupos.filter(
    (g) =>
      searchYear === "" ||
      g.organizacionEscolar?.anio_lectivo?.anio_lectivo
        .toString()
        .includes(searchYear)
  )

  // Resetear a página 1 cuando cambia la búsqueda
  useEffect(() => {
    setCurrentPage(1)
  }, [searchYear])

  const totalPages = Math.ceil(filteredHistoricalClasses.length / ITEMS_PER_PAGE)
  const paginatedClasses = filteredHistoricalClasses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <div className="min-h-screen bg-purple-100/30">
      <Header title='Sistema de Calificaciones SIRD' subTitle='Historial de Grados' />
      <div className="container mx-auto px-6 py-7">
        {/* Botón de regreso */}
        <button
          onClick={() => router.push('/docente/home')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 group"
        >
          <div className="p-1.5 rounded-lg bg-white shadow-sm group-hover:bg-gray-50 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Volver al inicio</span>
          </div>
          
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center shadow-md">
              <FaClockRotateLeft className="text-white text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Historial de Grados</h2>
              <p className="text-muted-foreground text-sm">Grupos anteriores: guía y materias impartidas</p>
            </div>
          </div>
        </div>

        {/* Barra de búsqueda */}
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Buscar por año..."
            value={searchYear}
            onChange={(e) => setSearchYear(e.target.value)}
            className="pl-10 h-12 text-base rounded-xl border-gray-200 focus:border-blue-400 focus:ring-blue-400"
          />
        </div>

        {/* Grid de historial */}
        {filteredHistoricalClasses.length > 0 ? (
          <><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedClasses.map((classData, index) => (
              <motion.div
                key={classData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                  {/* Barra superior */}
                  <div className="h-1.5 bg-gradient-to-r from-blue-400 to-blue-500" />
                  <CardContent className="p-6">
                    {/* Header con badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-base">
                            {classData.grado?.grades ?? "Sin grado"} - Sección {classData.seccion.seccion} - {classData.organizacionEscolar?.turno?.turno}
                          </h3>
                          <p className="text-sm text-gray-500">{classData.organizacionEscolar?.turno?.modalidad?.modalidad ?? "Sin modalidad"}</p>
                          <div className="flex flex-wrap items-center gap-1 mt-1">
                            {classData.esGuia && (
                              <span className="inline-block text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                                Docente guía
                              </span>
                            )}
                            {classData.esMateria && (
                              <span className="inline-block text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                                Materias: {classData.materias || "—"}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-xs px-3 py-1.5 font-medium shadow-sm">
                        {classData.organizacionEscolar?.anio_lectivo?.anio_lectivo ?? "Sin año"}
                      </Badge>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-5 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2.5">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span>Estudiantes: <strong>{classData.numero_estudiantes ?? "—"}</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2.5">
                        <BookOpen className="w-4 h-4 text-purple-500" />
                        <span>Materias: <strong>{classData.numero_materias ?? "—"}</strong></span>
                      </div>
                    </div>

                    {/* Botón */}
                    <Button
                      size="default"
                      className="w-full h-11 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                      disabled={!classData.esquelaHead?.id}
                      onClick={() => {
                        if (classData.esquelaHead?.id) {
                          router.push(`/esquela-calificaciones/${classData.esquelaHead.id}`)
                        }
                      }}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Ver Esquela
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="bg-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? "bg-blue-500 text-white" : "bg-white"}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="bg-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
          </>
        ) : (
          <Card className="text-center py-16 max-w-lg mx-auto rounded-2xl">
            <CardContent>
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-lg font-medium text-gray-500">
                {searchYear ? "No se encontraron resultados" : "No hay historial disponible"}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {searchYear ? "Intenta con otro año de búsqueda" : "Aún no tienes grupos en años finalizados"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
