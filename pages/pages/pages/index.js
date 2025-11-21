import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [showBot, setShowBot] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-24 text-center">
        <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} className="text-5xl md:text-6xl font-bold">
          SAN FRANCISCO VIDRERÍAS
        </motion.h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto px-4">
          Vidrio templado · Aluminio · Acero inoxidable · Todo México
        </p>
        <button onClick={() => setShowBot(true)} className="mt-8 bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-4 rounded-full text-lg">
          Cotiza con IA ahora
        </button>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {['Vidrio Templado', 'Canceleria Aluminio', 'Acero Inoxidable', 'Espejos', 'Fachadas', 'Domos y Barandales'].map(s => (
            <motion.div key={s} whileHover={{ scale: 1.05 }} className="bg-white rounded-xl shadow-2xl p-8 text-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-6" />
              <h3 className="text-2xl font-bold text-emerald-900">{s}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-emerald-900 text-white py-12 text-center">
        <Link href="/login" className="underline text-lg">Portal Interno (Vendedores/Director)</Link>
        <p className="mt-4">© 2025 San Francisco Vidrierías</p>
      </footer>

      {showBot && (
        <div className="fixed bottom-6 right-6 bg-white p-6 rounded-2xl shadow-2xl max-w-sm z-50 border">
          <p className="font-bold mb-3">¡Hola! ¿En qué te ayudo?</p>
          <input className="w-full border p-3 rounded mb-2" placeholder="Describe tu proyecto..." />
          <button onClick={() => setShowBot(false)} className="text-red-600 font-bold">Cerrar</button>
        </div>
      )}
    </div>
  )
}
