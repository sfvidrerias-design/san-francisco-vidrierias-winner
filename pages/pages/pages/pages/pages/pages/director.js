export default function Director() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-10">PANEL DIRECTOR</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur p-10 rounded-2xl text-center">
          <p className="text-6xl font-bold">$1,284,500</p>
          <p className="text-2xl mt-4">Ventas totales</p>
        </div>
        <div className="bg-white/10 backdrop-blur p-10 rounded-2xl text-center">
          <p className="text-6xl font-bold">12</p>
          <p className="text-2xl mt-4">Vendedores</p>
        </div>
        <div className="bg-white/10 backdrop-blur p-10 rounded-2xl text-center">
          <p className="text-6xl font-bold">347</p>
          <p className="text-2xl mt-4">Leads bots</p>
        </div>
      </div>
    </div>
  )
}
