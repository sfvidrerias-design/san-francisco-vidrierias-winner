export default function Director() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Panel Director</h1>
      <p>Control total, reportes y bots aquí. Rendimiento vendedores y campañas.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="bg-blue-500 text-white p-4 rounded">Ventas Total: $50k</div>
        <div className="bg-green-500 text-white p-4 rounded">Vendedores: 5</div>
        <div className="bg-purple-500 text-white p-4 rounded">Leads Bots: 20</div>
      </div>
    </div>
  );
}
