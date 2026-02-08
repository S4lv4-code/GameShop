import { Button } from "../ui/Button";

function CollectionCard({ title, description, gamesCount, onView }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center space-y-4 hover:border-gray-500 transition-all aspect-square justify-center group">
      
      <div className="space-y-1">
        <h3 className="text-xl font-black text-white uppercase tracking-tighter line-clamp-1 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-[10px] line-clamp-2 uppercase font-bold tracking-widest">
          {description || "Sin descripción"}
        </p>
      </div>

      <div className="flex flex-col items-center py-2">
        <span className="text-5xl font-black text-white">{gamesCount}</span>
        <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">Juegos</span>
      </div>

      <div className="w-full pt-2">
        <Button 
          variant="primary" 
          className="w-full text-xs py-3" 
          onClick={onView}
        >
          VER COLECCIÓN
        </Button>
      </div>
    </div>
  );
}

export default CollectionCard;