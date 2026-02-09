
# 🎮 GAMERVAULT | Game Library Manager

**GamerVault** es una plataforma de gestión de bibliotecas de videojuegos personal desarrollada con **React** y **PocketBase**. Permite a los usuarios organizar su colección, realizar un seguimiento de su progreso y agrupar sus títulos en colecciones personalizadas.

---

## 🚀 Características Principales

* **Gestión de Inventario (CRUD):** Añade, edita y elimina juegos con soporte para carga de múltiples imágenes.
* **Sistema de Colecciones:** Crea grupos personalizados para organizar tus juegos por temática, estado o preferencia.
* **Dashboard de Estadísticas:** Visualización rápida de juegos totales, terminados y actividad reciente.
* **Autenticación Completa:** Registro de usuarios, inicio de sesión seguro y gestión de perfil con avatar.
* **Arquitectura Escalable:** Separación clara entre servicios de API, componentes de UI y lógica de navegación.

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
| --- | --- |
| **React 18** | Framework de Frontend |
| **PocketBase** | Backend-as-a-Service (Base de Datos, Auth y Archivos) |
| **Tailwind CSS** | Estilizado rápido y responsive |
| **React Router 6** | Navegación y protección de rutas |
| **Lucide React** | Librería de iconos minimalistas |

---

## 🏗️ Arquitectura del Proyecto

El proyecto sigue una estructura de carpetas organizada para facilitar el mantenimiento y la defensa oral:

```bash
src/
├── components/     # Componentes reutilizables (Botones, Inputs, Cards)
├── context/        # Manejo del estado global (Autenticación)
├── layouts/        # Estructura visual común (Sidebar, Header)
├── pages/          # Vistas principales (Dashboard, Games, Collections)
├── services/       # Comunicación directa con PocketBase (API calls)
└── ui/             # Componentes base de la interfaz

```

---

## ⚙️ Configuración e Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/gamervault.git
cd gamervault

```


2. **Instalar dependencias:**
```bash
npm install

```


3. **Configurar el Backend:**
* Descarga y ejecuta [PocketBase](https://pocketbase.io/).
* Crea las colecciones: `users`, `games`, `collections` y `collection_games`.
* Configura el **Cascade Delete** en la tabla intermedia.


4. **Ejecutar el proyecto:**
```bash
npm run dev

```



---

## 📝 Documentación de la Base de Datos

### Relaciones (ERD)

* **Users:** Posee juegos y colecciones.
* **Games:** Entidad principal con título, plataforma, estado e imágenes.
* **Collections:** Título y descripción.
* **Collection_Games:** Tabla intermedia (Many-to-Many) que vincula juegos con colecciones sin duplicar datos.

---

## 👤 Autor

 **Salvatore De Rosa Vega** – *Desarrollo Fullstack* – [Tu GitHub](https://www.google.com/search?q=https://github.com/tu-usuario)
 https://www.figma.com/design/lr0j1s3DyKDksgZs63ak1a/Gameshop-%E2%80%93-UI-Design.?node-id=0-1&t=jsvkHvcVAzXVWEKS-1

---

