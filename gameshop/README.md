
# 🎮 GAMERVAULT | Game Library Manager

**GAMESHOP** es una plataforma integral de gestión de bibliotecas de videojuegos diseñada para coleccionistas y jugadores que buscan organizar su catálogo personal. La aplicación permite centralizar títulos, realizar un seguimiento del estado de juego y agruparlos en colecciones personalizadas de forma intuitiva y eficiente.

---

## 📍 Tabla de Contenidos

- [🎮 GAMERVAULT | Game Library Manager](#-gamervault--game-library-manager)
  - [📍 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🖼️ Demo y Capturas](#️-demo-y-capturas)
    - [🖥️ Vista General: Dashboard](#️-vista-general-dashboard)
    - [🎮 Gestión de Biblioteca](#-gestión-de-biblioteca)
    - [📂 Detalle de Colecciones](#-detalle-de-colecciones)
    - [👤 Perfil y Seguridad](#-perfil-y-seguridad)
  - [⚙️ Requisitos Funcionales](#️-requisitos-funcionales)
  - [🛠️ Tecnologías Usadas](#️-tecnologías-usadas)
  - [📋 Requisitos Previos](#-requisitos-previos)
  - [🚀 Instalación](#-instalación)
  - [🔐 Variables de Entorno](#-variables-de-entorno)
  - [⚖️ Licencia](#️-licencia)
  - [👤 Autor / Contacto](#-autor--contacto)
---

## 🖼️ Demo y Capturas

> **Acceso a la Demo:** [Ver proyecto en vivo](TU_LINK_DE_VERCEL_O_NETLIFY) *(Opcional: elimina esta línea si no tienes deploy)*

### 🖥️ Vista General: Dashboard
![Dashboard de GameShop](ruta/captura-dashboard.png)
*El panel principal ofrece una visión rápida de las estadísticas globales: número total de juegos en la biblioteca, colecciones creadas y el último título añadido.*

### 🎮 Gestión de Biblioteca
![Listado de Juegos](ruta/captura-juegos.png)
*Vista de todos los juegos donde el usuario puede visualizar carátulas, filtrar por plataforma y estado (Pendiente, Jugando, Completado) y acceder a la edición.*

### 📂 Detalle de Colecciones
![Vista de Colecciones](ruta/captura-colecciones.png)
*Exploración de listas personalizadas. Permite ver exclusivamente los títulos asignados a una categoría específica sin redundancia de datos.*

### 👤 Perfil y Seguridad
![Pantalla de Login y Perfil](ruta/captura-perfil.png)
*Sistema de autenticación y gestión de perfil, donde el usuario puede personalizar su avatar y nombre de jugador.*

---

## ⚙️ Requisitos Funcionales

La aplicación ha sido diseñada para cubrir el ciclo completo de gestión de una biblioteca digital, cumpliendo con las siguientes funcionalidades:

* **Autenticación y Autorización:**
    * Registro de nuevos usuarios e inicio de sesión seguro mediante JWT.
    * Persistencia de sesión mediante `pb.authStore` (LocalStorage).
    * Protección de rutas para evitar accesos no autorizados a la biblioteca privada.
* **Gestión de Videojuegos (CRUD):**
    * **Crear:** Añadir juegos con detalles como plataforma, estado y múltiples capturas de pantalla.
    * **Leer:** Visualización en cuadrícula con placeholders dinámicos para juegos sin imagen.
    * **Actualizar:** Modificación de metadatos y gestión de imágenes existentes.
    * **Borrar:** Eliminación física de registros y sus archivos asociados en el servidor.
* **Sistema de Colecciones (Relación Muchos a Muchos):**
    * Creación de agrupaciones personalizadas independientes de los juegos.
    * Vinculación/Desvinculación de juegos a colecciones mediante una tabla intermedia.
    * Navegación jerárquica: de la lista de colecciones al detalle de los juegos contenidos.
* **Perfil de Usuario:**
    * Personalización de cuenta (Avatar y Nombre).
    * Sistema de borrado de cuenta integrado.

---

## 🛠️ Tecnologías Usadas

El proyecto se ha desarrollado bajo una arquitectura moderna de **SPA (Single Page Application)**, separando completamente el Frontend del Backend (BaaS).

* **Entorno de Desarrollo y Build:** [Vite](https://vitejs.dev/) - Herramienta de construcción de última generación para una experiencia de desarrollo rápida.
* **Frontend:**
    * **React (v18):** Biblioteca principal para la construcción de la interfaz basada en componentes.
    * **React Router Dom (v6):** Gestión de enrutamiento dinámico y protección de navegación.
    * **Tailwind CSS:** Framework de utilidades para el diseño responsive y estilización moderna.
    * **React Hot Toast:** Sistema de notificaciones no intrusivas para feedback de usuario.
* **Backend & Persistencia:**
    * **PocketBase:** Backend-as-a-Service (BaaS) que integra base de datos SQLite, Auth y File Storage.
    * **SDK PocketBase:** Cliente oficial para la comunicación asíncrona con la API.
* **Gestión de Paquetes:** `npm` (Node Package Manager).

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

* **Node.js:** Versión 18.0 o superior.
* **Gestor de paquetes:** `npm` (viene incluido con Node.js).
* **Servidor PocketBase:** Necesitas una instancia de [PocketBase](https://pocketbase.io/docs/) ejecutándose (ya sea local o en la nube) para que la base de datos sea accesible.

---

## 🚀 Instalación

Sigue estos pasos para configurar el entorno de desarrollo local:

1. **Clonar el repositorio:**
 ```bash
 git clone [https://github.com/S4lv4-code/GameShop.git](https://github.com/S4lv4-code/GameShop.git)
 cd GameShop/gameshop
 ```


2. **Instalar dependencias:**
```bash
npm install

```
3. **Configurar el Backend:**

Asegúrate de tener tu ejecutable de pocketbase en una carpeta aparte o en la raíz.

Ejecuta el servidor de PocketBase:

```bash
./pocketbase serve
```

4. **Ejecutar en desarrollo:**
```bash
npm run dev

```
La aplicación será accesible en http://localhost:5173.

---

## 🔐 Variables de Entorno

Para que la aplicación se conecte correctamente al backend, crea un archivo `.env` en la raíz del proyecto:

```env
# URL de conexión a tu instancia de PocketBase
VITE_POCKETBASE_URL="http://127.0.0.1:8090"

```

---

## ⚖️ Licencia

Este proyecto está bajo la licencia **MIT**. Eres libre de usarlo y modificarlo siempre que se mantenga el reconocimiento de autoría.

---

## 👤 Autor / Contacto

* **Nombre:** Salvatore De Rosa Vega
* **GitHub:** [@S4lv4-code](https://github.com/S4lv4-code)
* **Figma:** (https://www.figma.com/design/lr0j1s3DyKDksgZs63ak1a/Gameshop-%E2%80%93-UI-Design.?node-id=0-1&t=1kcC5JIk6yd2FdTI-1)
