import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar({ onNavigate }) {
  const { logout } = useAuth();

  const menuItems = [
    { name: "Inicio", path: "/dashboard", icon: "🏠" },
    { name: "Mis Juegos", path: "/games", icon: "🎮" },
    { name: "Colecciones", path: "/collections", icon: "📂" },
    { name: "Mi Perfil", path: "/profile", icon: "👤" },
  ];

  // Estilos limpios y constantes
  const baseStyle = "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-bold uppercase text-[12px] tracking-widest";
  const activeStyle = "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]";
  const inactiveStyle = "text-gray-500 hover:bg-gray-800 hover:text-white";

  return (
    // Quitamos h-screen porque el MainLayout ya controla la altura
    <aside className="w-full bg-black h-full flex flex-col border-r border-gray-800">
      <div className="p-8">
        <h1 className="text-2xl font-black tracking-tighter text-white italic">
          GAME<span className="text-gray-500">SHOP</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            // Importante: Cerramos el sidebar en móvil al hacer click
            onClick={onNavigate}
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={() => {
            logout();
            if (onNavigate) onNavigate(); // Cerramos si es móvil
          }}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-500 bg-red-500/5 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-300 font-black text-[12px] uppercase tracking-widest border border-red-500/20"
        >
          <span>🚪</span> Salir del Sistema
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;