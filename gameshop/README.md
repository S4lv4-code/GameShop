Aquí tienes el **README.md** estructurado exactamente con los puntos que has solicitado, manteniendo el tono profesional y técnico necesario para tu defensa.

---

# 🎮 GAMERVAULT | Game Library Manager

**GamerVault** es una aplicación web diseñada para coleccionistas y entusiastas de los videojuegos que buscan centralizar su biblioteca personal. Permite gestionar títulos, realizar un seguimiento del estado de juego y organizar los juegos en colecciones personalizadas de forma eficiente.

---

## 📍 Tabla de Contenidos

1. [Demo / Capturas](https://www.google.com/search?q=%23-demo--capturas)
2. [Requisitos Funcionales](https://www.google.com/search?q=%23-requisitos-funcionales)
3. [Tecnologías Usadas](https://www.google.com/search?q=%23-tecnolog%C3%ADas-usadas)
4. [Instalación y Requisitos](https://www.google.com/search?q=%23-instalaci%C3%B3n-y-requisitos)
5. [Variables de Entorno](https://www.google.com/search?q=%23-variables-de-entorno)
6. [Licencia](https://www.google.com/search?q=%23-licencia)

---

## 📸 Demo / Capturas

> **Nota:** Puedes ver la aplicación desplegada en: [LINK_A_TU_DEPLOY]

### 1. Dashboard Principal

*Resumen visual con estadísticas en tiempo real sobre el total de juegos, colecciones y el último título añadido.*

### 2. Gestión de Juegos

*Listado de juegos con tarjetas interactivas que muestran plataforma, estado y la colección a la que pertenecen.*

### 3. Vista de Colecciones

*Pantalla detallada donde se filtran y muestran exclusivamente los juegos vinculados a una colección específica.*

---

## ⚙️ Requisitos Funcionales (¿Qué hace?)

* **Autenticación de Usuarios:** Sistema de registro, login y gestión de perfil (avatar y nombre de usuario).
* **CRUD de Juegos:** Creación, lectura, edición y eliminación de videojuegos con soporte para múltiples imágenes.
* **Sistema de Colecciones:** Creación de listas personalizadas (Muchos a Muchos) mediante una tabla intermedia.
* **Seguimiento de Estado:** Clasificación de juegos en "Pendiente", "Jugando" o "Completado".
* **Persistencia de Datos:** Los datos se mantienen seguros y vinculados a la cuenta de cada usuario en el servidor.

---

## 🛠️ Tecnologías Usadas

* **React 18:** Biblioteca principal para la interfaz de usuario.
* **Vite:** Herramienta de construcción y desarrollo rápido.
* **React Router Dom:** Gestión de rutas protegidas y navegación SPA.
* **Tailwind CSS:** Framework de estilos para un diseño moderno y responsive.
* **PocketBase:** Backend-as-a-Service para la base de datos, autenticación y almacenamiento de archivos.
* **NPM:** Gestor de paquetes de Node.js.

---

## 🚀 Instalación y Requisitos

### Requisitos Previos

* **Node.js:** Versión 18.0 o superior.
* **NPM:** Instalado globalmente.
* **PocketBase:** Servidor en ejecución (local o remoto).

### Pasos para instalar

1. **Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/gamervault.git
cd gamervault

```


2. **Instalar dependencias:**
```bash
npm install

```


3. **Ejecutar en desarrollo:**
```bash
npm run dev

```



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

* **Nombre:** [TU NOMBRE COMPLETO]
* **GitHub:** [@tu-usuario-github](https://www.google.com/search?q=https://github.com/tu-usuario)
* **LinkedIn:** [tu-perfil-linkedin]

---

**¿Te gustaría que añadamos alguna sección extra sobre la lógica de la base de datos o pasamos directamente a revisar el Sidebar?**