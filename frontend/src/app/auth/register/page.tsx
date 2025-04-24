'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('http://localhost:5003/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })

    if (res.ok) {
      router.push('/auth/login') // 👈 redirige al login
    } else {
      const data = await res.json()
      setMessage(data.message || 'Error al registrarse')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <h1 className="text-xl font-bold text-blue-600 text-center">Registro</h1>
        {message && <p className="text-red-500 text-sm text-center">{message}</p>}

        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border rounded-xl" required />
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-xl" required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border rounded-xl" required />

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
          Registrarse
        </button>

        <p className="text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{' '}
          <a href="/auth/login" className="text-blue-600 hover:underline">
            Inicia sesión
          </a>
        </p>
      </form>
    </div>
  )
}
