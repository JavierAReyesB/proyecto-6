# Proyecto 6: API REST - Películas y Plataformas

## Descripción

Este es mi primer proyecto de API REST utilizando **Node.js**, **Express** y **MongoDB** en el curso de Rock{theCode}. El proyecto permite la gestión de **películas** y las **plataformas** donde están disponibles. ¡Explora el contenido de películas y gestiona las plataformas de streaming fácilmente!

## Tecnologías Utilizadas

- **Node.js**
- **Express**
- **MongoDB (Atlas)**
- **Mongoose**
- **Dotenv**
- **Nodemon**

## Instalación
Clona el repositorio desde **GitHub** y accede al directorio del proyecto.
Instala las dependencias del proyecto utilizando npm install.
Crea un archivo .env en la raíz del proyecto con la variable DB_URL que apunte a tu base de datos MongoDB.
Ejecuta el servidor en modo desarrollo con npm run dev o en producción con npm start.

## Endpoints

### Películas
- **GET** `/api/v1/peliculas`: Obtiene todas las películas.
- **GET** `/api/v1/peliculas/:id`: Obtiene una película específica por su ID.
- **GET** `/api/v1/peliculas/category/:category`: Obtiene todas las películas de una categoría específica.
- **GET** `/api/v1/peliculas/actor/:actor`: Obtiene todas las películas que contengan un actor específico.
- **POST** `/api/v1/peliculas`: Crea una nueva película.
- **PUT** `/api/v1/peliculas/:id`: Actualiza la información de una película por su ID.
- **DELETE** `/api/v1/peliculas/:id`: Elimina una película por su ID.

### Plataformas
- **GET** `/api/v1/plataformas`: Obtiene todas las plataformas.
- **GET** `/api/v1/plataformas/:id`: Obtiene una plataforma específica por su ID.
- **POST** `/api/v1/plataformas`: Crea una nueva plataforma.
- **PUT** `/api/v1/plataformas/:id`: Actualiza la información de una plataforma por su ID.
- **DELETE** `/api/v1/plataformas/:id`: Elimina una plataforma por su ID.

## Funcionalidades Adicionales

- **Relación entre Colecciones**: Cada plataforma tiene un array de películas que están disponibles en esa plataforma.
- **Manejo de Arrays Relacionados**: Al actualizar una plataforma con nuevas películas, los datos anteriores no se eliminan y se evita la duplicación de películas en el array relacionado.

## Base de Datos

La base de datos utilizada es **MongoDB Atlas**. Asegúrate de tener una conexión activa a la base de datos en la nube utilizando tu archivo `.env`, que debe incluir las credenciales correctas para acceder a MongoDB Atlas.



