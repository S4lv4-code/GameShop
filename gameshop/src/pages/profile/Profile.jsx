import { useAuth } from "../../context/AuthContext";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import pb from "../../services/pocketbase";

export function Profile() {
  const { user, logout } = useAuth();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await pb.collection("users").update(user.id, formData);
      alert("Perfil actualizado. Los cambios se verán al recargar.");
      window.location.reload();
    } catch (err) { alert("Error al actualizar"); }
  };

  const handleDeleteAccount = async () => {
    if (confirm("¿ESTÁS SEGURO? Esta acción borrará todos tus juegos y colecciones permanentemente.")) {
      await pb.collection("users").delete(user.id);
      logout();
    }
  };

  return (
    <div className="max-w-2xl space-y-10">
      <header>
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter text-left">Mi Perfil</h1>
      </header>

      <form onSubmit={handleUpdate} className="space-y-6 bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
        <Input label="Nombre de Usuario" name="username" defaultValue={user?.username} />
        <Input label="Email" name="email" defaultValue={user?.email} disabled className="opacity-50" />
        
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Avatar de Jugador</label>
          <input type="file" name="avatar" className="block w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-white file:bg-gray-800" />
        </div>

        <Button type="submit" className="w-full">Actualizar Perfil</Button>
      </form>

      <div className="pt-10 border-t border-gray-800">
        <h3 className="text-red-500 font-black uppercase text-xs tracking-widest mb-4">Zona de Peligro</h3>
        <Button variant="danger" onClick={handleDeleteAccount} className="bg-red-500/10 border border-red-500/20">
          Borrar Cuenta Permanentemente
        </Button>
      </div>
    </div>
  );
}