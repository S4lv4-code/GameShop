import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCollectionById } from "../../services/collections.service";
import { getGamesByCollecion } from "../../services/collectionsGames.service";
import GameCard from "../../components/games/GameCard";
import { Button } from "../../components/ui/Button";

export function CollectionView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const colData = await getCollectionById(id);
        const gamesData = await getGamesByCollecion(id); // Usa tu service de tabla intermedia
        setCollection(colData);
        // Extraemos el objeto 'game' que viene dentro del expand de collection_games
        setGames(gamesData.map(item => item.expand.game));
      } catch (error) {
        navigate("/collections");
      }
    }
    loadData();
  }, [id, navigate]);

  if (!collection) return <div className="text-white p-10 uppercase font-black animate-pulse">Cargando colección...</div>;

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">{collection.title}</h1>
          <p className="text-gray-500 mt-2 max-w-xl">{collection.description}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => navigate(`/collections/${id}/edit`)}>Editar Datos</Button>
          <Button variant="ghost" onClick={() => navigate("/collections")}>Volver</Button>
        </div>
      </header>

      <section>
        <h2 className="text-xl font-bold text-white uppercase mb-6 tracking-widest text-gray-400">Juegos en esta colección</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.length > 0 ? (
            games.map((game) => (
              <GameCard key={game.id} game={game} onEdit={() => navigate(`/games/${game.id}`)} />
            ))
          ) : (
            <p className="col-span-full text-gray-600 italic py-10 border-2 border-dashed border-gray-800 rounded-2xl text-center">
              Aún no hay juegos vinculados a esta colección.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}