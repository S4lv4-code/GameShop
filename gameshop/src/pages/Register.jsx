import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== passwordConfirm) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      // Pasamos los datos según los necesite tu función register en AuthContext
      await register(email, password, passwordConfirm, username);
      navigate("/dashboard");
    } catch (err) {
      alert("Error al crear la cuenta. Inténtalo con otros datos.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 bg-gray-900/40 p-10 rounded-2xl border border-gray-800">
        <header className="text-center">
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase">GAMESHOP</h1>
          <p className="text-gray-500 text-sm mt-2 font-bold uppercase tracking-widest">Crea tu cuenta de jugador</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input 
            label="Nombre de Usuario" 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Ej: PlayerOne"
            required 
          />
          
          <Input 
            label="Email" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="correo@ejemplo.com"
            required 
          />

          <div className="grid grid-cols-1 gap-6">
            <Input 
              label="Contraseña" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <Input 
              label="Confirmar Contraseña" 
              type="password" 
              value={passwordConfirm} 
              onChange={(e) => setPasswordConfirm(e.target.value)} 
              required 
            />
          </div>

          <Button type="submit" className="w-full py-4 font-black">
            CREAR CUENTA
          </Button>
        </form>

        <p className="text-center text-gray-500 text-xs uppercase font-bold">
          ¿Ya tienes cuenta? <Link to="/" className="text-white hover:underline">Inicia Sesión</Link>
        </p>
      </div>
    </div>
  );
}