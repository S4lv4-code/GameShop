import { useEffect, useState } from "react";
import { getGames } from "../../services/games.service";
import { getCollections } from "../../services/collections.service";
import { StatCard } from "../../components/ui/StatCard";

export function Dashboard() {
  const [data, setData] = useState({
    totalGames: 0,
    totalCollections: 0,
    lastAdded: "Cargando...",
    completedGames: 0
  });

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const [games, collections] = await Promise.all([
          getGames(),
          getCollections()
        ]);

        // Filtrar juegos terminados si tienes un campo 'status'
        const completed = games.filter(g => g.status === "completado").length;
        
        setData({
          totalGames: games.length,
          totalCollections: collections.length,
          lastAdded: games.length > 0 ? games[0].title : "Ninguno",
          completedGames: completed
        });
      } catch (error) {
        console.error("Error cargando dashboard:", error);
      }
    }

    fetchDashboardData();
  }, []);

  return (
    <div className="space-y-8">
      {/* Título de la página arriba a la izquierda */}
      <header>
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
          Inicio
        </h1>
      </header>
      <p className="text-gray-500 mt-2">Resumen general de tu biblioteca.</p>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Juegos Totales" 
          value={data.totalGames} 
          footer="Añadidos este mes: +" // Aquí podrías calcular la fecha si quisieras
          icon="🎮"
        />
        
        <StatCard 
          title="Colecciones" 
          value={data.totalCollections} 
          footer="Tus favoritas" 
          icon="📂"
        />

        <StatCard 
          title="Juegos Terminados" 
          value={data.completedGames} 
          footer="¡Sigue así!" 
          icon="🏆"
        />

        <StatCard 
          title="Actividad Reciente" 
          value="Añadido" 
          footer={`"${data.lastAdded}"`} 
          icon="✨"
        />
      </div>
    </div>
  );
}