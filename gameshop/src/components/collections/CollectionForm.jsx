import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useAuth } from "../../context/AuthContext";

function CollectionForm({ onSubmit, onCancel, defaultValues = {} }) {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.user = user.id; // Vinculamos al usuario actual
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/40 p-8 rounded-2xl border border-gray-800">
      <Input 
        label="Título de la Colección" 
        name="title" 
        defaultValue={defaultValues.title} 
        placeholder="Ej: Favoritos de Acción"
        required 
      />
      
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest text-left block">
          Descripción
        </label>
        <textarea 
          name="description" 
          defaultValue={defaultValues.description}
          className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white focus:border-white outline-none h-32 transition-all"
          placeholder="Escribe una breve descripción..."
        />
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="submit" className="flex-1 py-4 font-black">
          {defaultValues.id ? "GUARDAR CAMBIOS" : "CREAR COLECCIÓN"}
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          CANCELAR
        </Button>
      </div>
    </form>
  );
}

export default CollectionForm;