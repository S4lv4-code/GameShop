import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden relative">
      {/* Botón Hamburguesa para Móvil (Solo visible en pantallas pequeñas) */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-white text-black w-14 h-14 rounded-full shadow-2xl flex items-center justify-center font-black border-4 border-gray-900"
      >
        {isSidebarOpen ? "✕" : "☰"}
      </button>

      {/* Overlay para cerrar sidebar al hacer clic fuera en móvil */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-30 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar con clases responsivas */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 bg-black border-r border-gray-800
      `}>
        <Sidebar onNavigate={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Lado derecho: Header + Contenido */}
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-black">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;