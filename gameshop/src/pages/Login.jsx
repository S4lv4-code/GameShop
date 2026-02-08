import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) { alert("Credenciales incorrectas"); }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 bg-gray-900/40 p-10 rounded-2xl border border-gray-800">
        <header className="text-center">
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase">GAMESHOP</h1>
          <p className="text-gray-500 text-sm mt-2 font-bold uppercase tracking-widest">Inicia sesión para continuar</p>
        </header>

        <form onSubmit={handleSumbit} className="space-y-6">
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button type="submit" className="w-full py-4">Entrar</Button>
        </form>

        <p className="text-center text-gray-500 text-xs uppercase font-bold">
          ¿No tienes cuenta? <Link to="/register" className="text-white hover:underline">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}