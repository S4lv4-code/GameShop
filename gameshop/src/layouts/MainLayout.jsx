import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Barra Lateral fija */}
      <Sidebar />

      {/* Lado derecho: Header + Contenido */}
      <div className="flex flex-col flex-1">
        <Header />
        
        {/* El contenido tiene su propio scroll */}
        <main className="flex-1 overflow-y-auto p-8 bg-black">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
