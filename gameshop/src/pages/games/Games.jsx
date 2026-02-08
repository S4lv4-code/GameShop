import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getGames, deleteGame } from "../../services/games.service";
import GameCard from "../../components/games/GameCard";
import { Button } from "../../components/ui/Button";

function Games() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getGames().then(setGames);
  }, []);

  const handleDelete = async (id) => {
    if (confirm("¿Seguro que quieres borrar este juego?")) {
      await deleteGame(id);
      setGames((prev) => prev.filter((g) => g.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
          Mis Juegos
        </h1>
        <Button onClick={() => navigate("/games/new")}>
          + Nuevo Juego
        </Button>
      </div>
       <p className="text-gray-500 mt-2">Toda tu coleción Aquí.</p>

      {/* Grid de tarjetas: 1 columna en móvil, 4 en pantallas grandes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onEdit={() => navigate(`/games/${game.id}`)}
            onDelete={() => handleDelete(game.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Games;