import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useAuth } from "../../context/AuthContext";

function GameForm({ onSubmit, onCancel, defaultValues = {}, collections = [], initialCollectionIds = [] }) {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set("user", user.id); 

    const fileInput = e.target.images;
    if (!fileInput || fileInput.files.length === 0) {
      formData.delete("images");
    } else {
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

      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest text-blue-400">
          Añadir a Colecciones
        </label>
        <div className="grid grid-cols-2 gap-3 bg-black/40 p-4 rounded-xl border border-gray-800 max-h-40 overflow-y-auto">
          {collections.map(c => (
            <label key={c.id} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                name="collection_ids" 
                value={c.id}
                defaultChecked={initialCollectionIds.includes(c.id)}
                className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                {c.title}
              </span>
            </label>
          ))}
          {collections.length === 0 && <p className="text-xs text-gray-600 italic">No tienes colecciones creadas.</p>}
        </div>
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