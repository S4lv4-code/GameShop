import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  getCollectionById, 
  createCollection, 
  updateCollection, 
  deleteCollection 
} from "../../services/collections.service";
import CollectionForm from "../../components/collections/CollectionForm";
import { Button } from "../../components/ui/Button";

export function CollectionsDetails() {
  const { id } = useParams(); // Si existe, estamos editando
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(!!id);

  useEffect(() => {
    if (id) {
      getCollectionById(id)
        .then(setCollection)
        .catch(() => navigate("/collections"))
        .finally(() => setLoading(false));
    }
  }, [id, navigate]);

  const handleSubmit = async (data) => {
    try {
      if (id) {
        await updateCollection(id, data);
      } else {
        await createCollection(data);
      }
      navigate("/collections");
    } catch (error) {
      alert("Error al procesar la colección");
    }
  };

  const handleDelete = async () => {
    if (confirm("¿Seguro que quieres borrar esta colección? Los juegos no se eliminarán.")) {
      await deleteCollection(id);
      navigate("/collections");
    }
  };

  if (loading) return <div className="p-20 text-center text-white font-black animate-pulse uppercase">Cargando Formulario...</div>;

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
            {id ? "Editar Colección" : "Nueva Colección"}
          </h1>
          <p className="text-gray-500 mt-2">
            {id ? "Modifica los detalles de tu lista." : "Crea un nuevo grupo para organizar tus juegos."}
          </p>
        </div>
        
        {id && (
          <Button variant="danger" onClick={handleDelete} className="mb-1">
            Eliminar
          </Button>
        )}
      </header>

      <CollectionForm 
        onSubmit={handleSubmit} 
        onCancel={() => navigate(id ? `/collections/${id}/view` : "/collections")} 
        defaultValues={collection || {}} 
      />
    </div>
  );
}