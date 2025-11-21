export default function Vendedor() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-emerald-900 mb-8">Panel Vendedor</h1>
      <div className="bg-white rounded-xl shadow-xl p-8">
        <p className="text-3xl font-bold">Comisión total: $0.00 MXN (8.96%)</p>
        <div className="mt-8">
          <input type="number" placeholder="Monto de venta" className="border p-4 rounded-lg text-xl w-64 mr-4" />
          <button className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-xl">Registrar venta</button>
        </div>
      </div>
    </div>
  )
}
