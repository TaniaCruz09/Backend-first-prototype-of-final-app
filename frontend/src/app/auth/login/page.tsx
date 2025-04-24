'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null) // Resetear error previo

    // Enviar datos al backend
    try {
      const response = await fetch('http://localhost:5003/api/v1/auth/login', {  // RUTA API en Next.js
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        // Login exitoso, redirigir al usuario
        console.log('Login exitoso', data)
        window.location.href = '/'  // Redirigir a la página de dashboard
      } else {
        // Mostrar error
        setError(data.message || 'Algo salió mal')
      }
    } catch (err) {
      setError('Error de red, intenta de nuevo')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-blue-600">Iniciar Sesión</h1>

        {error && <p className="text-red-500 text-center">{error}</p>} {/* Mensaje de error */}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <p className="text-center text-sm text-gray-600">
        ¿No tienes cuenta?{' '}
          <a href="/auth/register" className="text-blue-600 hover:underline">
          Regístrate aquí
          </a>
        </p>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Iniciar sesión'}
        </button>
      </form>
    </div>
  )
}
