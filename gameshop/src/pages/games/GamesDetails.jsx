import { useNavigate, useParams } from "react-router-dom";
import GameForm from "../../components/games/GameForm";
import { createGame, getGameById, updateGame } from "../../services/games.service";
import { getCollections } from "../../services/collections.service";
import { addGameToCollection } from "../../services/collectionsGames.service";
import { useEffect, useState } from "react";

export function GamesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(!!id);

  useEffect(() => {
    // Cargamos colecciones siempre (para el select)
    getCollections().then(setCollections).catch(() => setCollections([]));

    if (id) {
      getGameById(id)
        .then(setGame)
        .catch(() => navigate("/games"))
        .finally(() => setLoading(false));
    }
  }, [id, navigate]);

  const handleSubmit = async (formData) => {
    try {
      const collectionId = formData.get("collection_id");
      formData.delete("collection_id"); // Limpiamos para la tabla 'games'

      let gameId = id;

      if (id) {
        // 1. Actualizar datos básicos e imágenes (se mantienen si images es empty en formData)
        await updateGame(id, formData);
      } else {
        // 2. Crear juego nuevo
        const savedGame = await createGame(formData);
        gameId = savedGame.id;
      }

      // 3. Gestionar Colección (Solo si el usuario seleccionó una)
      if (collectionId && collectionId !== "") {
        await addGameToCollection(collectionId, gameId);
      }

      navigate("/games");
    } catch (error) {
      console.error("Error en el proceso:", error);
      alert("No se pudo guardar la información.");
    }
  };

  if (loading) return <div className="p-20 text-center text-white font-black animate-pulse">CARGANDO...</div>;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <header>
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
          {id ? "Editar Detalles" : "Nuevo Título"}
        </h1>
        <p className="text-gray-400">{id ? "Actualiza la información y gestión de colecciones." : "Añade un juego a tu biblioteca."}</p>
      </header>
      
      <GameForm 
        onSubmit={handleSubmit} 
        onCancel={() => navigate("/games")} 
        defaultValues={game || {}} 
        collections={collections}
      />
    </div>
  );
}