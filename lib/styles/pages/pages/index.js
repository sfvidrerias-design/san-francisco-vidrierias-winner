import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showBot, setShowBot] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-24 text-center">
        <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} className="text-5xl md:text-6xl font-bold">
          SAN FRANCISCO VIDRERÍAS
        </motion.h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto px-4">Remodelaciones y estructuras en vidrio, aluminio y acero inoxidable. De espejos rotos a edificios completos.</p>
        <button onClick={() => setShowBot(true)} className="mt-8 bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-4 rounded-full">
          Chat con IA
        </button>
      </section>
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {['Vidrio Templado', 'Estructuras Aluminio', 'Acero Inoxidable', 'Reparaciones', 'Fachadas Completas'].map((service) => (
            <motion.div key={service} whileHover={{ scale: 1.05 }} className="bg-white rounded-xl shadow-xl p-8 text-center">
              <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
              <h3 className="text-2xl font-bold text-emerald-900">{service}</h3>
              <p className="mt-2 text-gray-600">Cotiza gratis</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="bg-emerald-900 text-white py-12 text-center">
        <Link href="/login" className="underline text-lg">Portal Interno (Vendedores/Director)</Link>
        <p className="mt-4">© 2025 San Francisco Vidrierías - México</p>
      </footer>
      {showBot && (
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-6 right-6 bg-white p-6 rounded-2xl shadow-2xl w-80">
          <p>¡Hola! ¿Qué servicio necesitas?</p>
          <input className="w-full border mt-3 p-2 rounded" placeholder="Describe tu proyecto..." />
          <button onClick={() => setShowBot(false)} className="mt-2 text-red-600">Cerrar</button>
        </motion.div>
      )}
    </div>
  );
}
