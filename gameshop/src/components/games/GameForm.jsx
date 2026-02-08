import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useAuth } from "../../context/AuthContext";

function GameForm({ onSubmit, onCancel, defaultValues = {}, collections = [] }) {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set("user", user.id); 

    const fileInput = e.target.images;
    // Si no hay archivos nuevos, eliminamos el campo para no pisar las fotos actuales en PB
    if (!fileInput || fileInput.files.length === 0) {
      formData.delete("images");
    } else {
      // Si hay archivos, los añadimos correctamente uno a uno
      formData.delete("images");
      for (let file of fileInput.files) {
        formData.append("images", file);
      }
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6 bg-gray-900/40 p-8 rounded-2xl border border-gray-800">
      <Input label="Nombre del Juego" name="title" defaultValue={defaultValues.title} required />

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Plataforma</label>
          <select name="platform" defaultValue={defaultValues.platform || "PC"} className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white focus:border-white outline-none">
            <option value="PC">PC</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Xbox">Xbox</option>
            <option value="Switch">Switch</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Estado</label>
          <select name="status" defaultValue={defaultValues.status || "Pendiente"} className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white focus:border-white outline-none">
            <option value="Pendiente">Pendiente</option>
            <option value="Jugando">Jugando</option>
            <option value="Completado">Completado</option>
          </select>
        </div>
      </div>

      {/* Selector Opcional: Aparece siempre (Crear y Editar) */}
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest text-blue-400">
          Añadir a una Colección (Opcional)
        </label>
        <select name="collection_id" className="w-full bg-gray-900 border border-blue-900/30 rounded-lg p-3 text-white outline-none focus:border-blue-500">
          <option value="">-- No asignar o mantener actuales --</option>
          {collections.map(c => (
            <option key={c.id} value={c.id}>{c.title}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Descripción</label>
        <textarea name="description" defaultValue={defaultValues.description} className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white focus:border-white outline-none h-24" />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Imágenes</label>
        <input type="file" name="images" multiple accept="image/*" className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-bold file:bg-white file:text-black hover:file:bg-gray-200" />
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="submit" className="flex-1 py-4 font-black">
          {defaultValues.id ? "GUARDAR CAMBIOS" : "CREAR JUEGO"}
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel}>CANCELAR</Button>
      </div>
    </form>
  );
}

export default GameForm;