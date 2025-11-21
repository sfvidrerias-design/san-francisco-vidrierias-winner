export default function Vendedor() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Panel Vendedor</h1>
      <p>Bitácora de ventas y comisiones (8.96%) aquí. Integra DB después.</p>
      <table className="w-full mt-4 border">
        <thead><tr><th>Fecha</th><th>Monto</th><th>Comisión</th></tr></thead>
        <tbody><tr><td>21/11/2025</td><td>$10,000</td><td>$896</td></tr></tbody>
      </table>
    </div>
  );
}
