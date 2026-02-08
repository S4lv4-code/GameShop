import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // URL del avatar en PocketBase (colección 'users')
  const avatarUrl = user?.avatar 
    ? `http://127.0.0.1:8090/api/files/users/${user.id}/${user.avatar}`
    : null;

  return (
    <header className="h-16 border-b border-gray-800 bg-black flex items-center justify-between px-8">
      <div className="text-gray-400 text-sm uppercase font-black tracking-widest">
        Player: <span className="text-white">{user?.username || user?.email}</span>
      </div>
      
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => navigate("/profile")}
      >
        <div className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 overflow-hidden flex items-center justify-center group-hover:border-white transition-all">
          {avatarUrl ? (
            <img src={avatarUrl} alt="avatar" className="w-full h-full object-cover" />
          ) : (
            <span className="text-white font-black">{user?.email?.charAt(0).toUpperCase()}</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;