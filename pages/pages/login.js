export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-emerald-700 flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-emerald-900 text-center mb-8">
          Acceso Interno
        </h1>

        <input
          type="email"
          placeholder="Correo"
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 text-lg"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 text-lg"
        />
        <button className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-4 rounded-lg text-xl">
          Ingresar
        </button>
      </div>
    </div>
  )
}
