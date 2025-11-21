import { useState } from 'react';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => alert('Login simulado - integra Supabase después');
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Acceso Interno</h1>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border mb-4 rounded" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border mb-4 rounded" />
        <button onClick={handleLogin} className="w-full bg-emerald-700 text-white py-3 rounded">Entrar</button>
      </div>
    </div>
  );
}
