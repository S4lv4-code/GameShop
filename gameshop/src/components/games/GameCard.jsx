import { Button } from "../ui/Button";

function GameCard({ game, onEdit, onDelete }) {
  const { title, platform, status, images, id } = game;

  // Placeholder más estético y oscuro
  const imageUrl =
    images?.length > 0
      ? `http://127.0.0.1:8090/api/files/games/${id}/${images[0]}`
      : "https://placehold.co/400x600/0f172a/64748b?text=GAME+ART";

  // Colores según el estado del juego
  const statusStyles = {
    pendiente: "border-yellow-500/50 text-yellow-500",
    jugando: "border-blue-500/50 text-blue-500",
    completado: "border-green-500/50 text-green-500",
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Evita clics accidentales si la card fuera un link
    if (
      window.confirm(`¿Estás seguro de eliminar "${title}" permanentemente?`)
    ) {
      onDelete(id);
    }
  };

  const collections = game.expand?.["collection_games(game)"] ?? [];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden flex flex-col group hover:border-gray-500 transition-all duration-300">
      <div className="aspect-[3/4] overflow-hidden bg-black relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
        />
      </div>

      <div className="p-4 space-y-4 flex flex-col flex-1">
        <h3 className="font-black text-lg text-white uppercase truncate tracking-tighter">
          {title}
        </h3>

        <div className="flex gap-2">
          <span className="text-[10px] font-black px-2 py-1 bg-white text-black uppercase">
            {platform}
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-1 border uppercase ${statusStyles[status?.toLowerCase()] || "border-gray-700 text-gray-400"}`}
          >
            {status}
          </span>
        </div>

        <div className="flex gap-1 flex-wrap">
          {collections.slice(0, 3).map((item) =>
            item.expand?.collection?.title ? (
              <div
                key={item.id}
                className="text-[10px] text-blue-400 font-black uppercase tracking-widest bg-blue-500/10 px-2 py-1 rounded"
              >
                📁 {item.expand.collection.title}
              </div>
            ) : null,
          )}
        </div>

        <div className="flex gap-2 pt-2 mt-auto">
          <Button
            variant="ghost"
            className="flex-1 text-[10px] py-2"
            onClick={onEdit}
          >
            EDITAR
          </Button>
          <Button
            variant="danger"
            className="flex-1 text-[10px] py-2"
            onClick={handleDeleteClick}
          >
            BORRAR
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
