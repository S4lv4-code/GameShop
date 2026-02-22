import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCollectionById } from "../../services/collections.service";
import { getGamesByCollecion, removeGameFromCollection } from "../../services/collectionsGames.service";
import GameCard from "../../components/games/GameCard";
import { Button } from "../../components/ui/Button";

export function CollectionView() {
  const { id } = useParams();
  const [relations, setRelations] = useState([]);
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);
  const [games, setGames] = useState([]);

  const loadData = async () => {
    try {
      const colData = await getCollectionById(id);
      const gamesData = await getGamesByCollecion(id);
      setCollection(colData);
      setRelations(gamesData); // Guardamos toda la info (id de la relación + expand)
    } catch (error) { navigate("/collections"); }
  };

  useEffect(() => { loadData(); }, [id]);

  const handleRemove = async (relationId) => {
  if (confirm("¿Quitar este juego de la colección?")) {
    try {
      await removeGameFromCollection(relationId);
      // Actualizamos el estado local inmediatamente para que el juego desaparezca sin esperar al fetch
      setRelations(prev => prev.filter(rel => rel.id !== relationId));
    } catch (error) {
      console.error("No se pudo quitar el juego", error);
    }
  }
};

  if (!collection)
    return (
      <div className="text-white p-10 uppercase font-black animate-pulse">
        Cargando colección...
      </div>
    );

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
            {collection.title}
          </h1>
          <p className="text-gray-500 mt-2 max-w-xl">
            {collection.description}
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="secondary"
            onClick={() => navigate(`/collections/${id}/edit`)}
          >
            Editar Datos
          </Button>
          <Button variant="ghost" onClick={() => navigate("/collections")}>
            Volver
          </Button>
        </div>
      </header>

      <section>
        <h2 className="text-xl font-bold text-white uppercase mb-6 tracking-widest text-gray-400">Juegos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relations.length > 0 ? (
            relations.map((rel) => (
              <div key={rel.id} className="relative group">
                {/* Botón flotante para desvincular */}
                <button 
                  onClick={() => handleRemove(rel.id)}
                  className="absolute -top-2 -right-2 z-10 bg-red-600 text-white w-8 h-8 rounded-full font-black opacity-0 group-hover:opacity-100 transition-opacity shadow-xl"
                  title="Quitar de la colección"
                >
                  ✕
                </button>
                
                <GameCard 
                  game={rel.expand.game} 
                  onEdit={() => navigate(`/games/${rel.expand.game.id}`)} 
                />
              </div>
            ))
          ) : (
             <p>No hay juegos...</p>
          )}
        </div>
      </section>
    </div>
  );
}
