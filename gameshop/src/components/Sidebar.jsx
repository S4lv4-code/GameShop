import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { logout } = useAuth();

  const menuItems = [
    { name: "Inicio", path: "/dashboard", icon: "🏠" },
    { name: "Mis Juegos", path: "/games", icon: "🎮" },
    { name: "Colecciones", path: "/collections", icon: "📂" },
    { name: "Mi Perfil", path: "/profile", icon: "👤" },
  ];

  const activeStyle = "bg-white text-black";
  const inactiveStyle = "text-white hover:bg-gray-800";

  return (
    <aside className="w-64 bg-black h-screen flex flex-col border-r border-gray-800">
      <div className="p-6">
        <h1 className="text-2xl font-black tracking-tighter text-white">GAMESHOP</h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                isActive ? activeStyle : inactiveStyle
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-400 bg-red-500/10 hover:bg-red-500 hover:text-white rounded-lg transition-all duration-200 font-medium"
        >
          <span>🚪</span> Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;