import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GameForm from "../../components/games/GameForm";
import { createGame, getGameById, updateGame } from "../../services/games.service";
import { getCollections } from "../../services/collections.service";
import { 
  addGameToCollection, 
  getRelationsByGame, 
  removeGameFromCollection 
} from "../../services/collectionsGames.service";

export function GamesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [game, setGame] = useState({});
  const [collections, setCollections] = useState([]);
  const [currentCollectionIds, setCurrentCollectionIds] = useState([]);
  const [loading, setLoading] = useState(!!id);

  // Cargamos los datos iniciales
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cols = await getCollections();
        setCollections(cols);

        if (id) {
          const [gameData, relations] = await Promise.all([
            getGameById(id), 
            getRelationsByGame(id)
          ]);
          setGame(gameData);
          setCurrentCollectionIds(relations.map(r => r.collection));
        }
      } catch (err) {
        navigate("/games");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, navigate]);

  const handleSubmit = async (formData) => {
    try {
      const selectedIds = formData.getAll("collection_ids");
      formData.delete("collection_ids");

      // Guardar o Actualizar Juego
      const savedGame = id ? await updateGame(id, formData) : await createGame(formData);
      const gameId = id || savedGame.id;

      // Sincronizar Colecciones (Lógica limpia)
      const existingRelations = id ? await getRelationsByGame(gameId) : [];
      const existingIds = existingRelations.map(r => r.collection);

      // Borrar desmarcadas
      const toDelete = existingRelations.filter(r => !selectedIds.includes(r.collection));
      await Promise.all(toDelete.map(r => removeGameFromCollection(r.id)));

      // Añadir nuevas
      const toAdd = selectedIds.filter(colId => !existingIds.includes(colId));
      await Promise.all(toAdd.map(colId => addGameToCollection(colId, gameId)));

      navigate("/games");
    } catch (error) {
      alert("Error al procesar el formulario");
    }
  };

  if (loading) return (
    <div className="p-20 text-center text-white font-black animate-pulse uppercase">
      Cargando...
    </div>
  );

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <header>
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
          {id ? "Editar Detalles" : "Nuevo Título"}
        </h1>
        <p className="text-gray-400">
          {id ? "Actualiza la información y gestión de colecciones." : "Añade un juego a tu biblioteca."}
        </p>
      </header>

      <GameForm
        onSubmit={handleSubmit}
        onCancel={() => navigate("/games")}
        defaultValues={game}
        collections={collections}
        initialCollectionIds={currentCollectionIds}
      />
    </div>
  );
}