# API RESTful con MongoDB 

## Descripción del Proyecto

Este proyecto es una API RESTful construida con Node.js, Express y Mongoose que interactúa con una base de datos MongoDB. Proporciona endpoints para la gestión de datos de usuarios, permitiendo a los clientes crear, obtener y eliminar registros de usuarios. Esta API está diseñada para ser una solución simple y eficiente para la gestión de usuarios en una aplicación web.

## Características

*   **Gestión de Usuarios:**
    *   Creación de nuevos usuarios con `displayName` y `email`.
    *   Obtención de una lista de todos los usuarios.
    *   Eliminación de usuarios por su ID.
*   **API RESTful:** Sigue los principios REST para interacciones predecibles y eficientes.
*   **Integración con MongoDB:** Utiliza Mongoose ODM para interactuar con una base de datos MongoDB.
*   **CORS Habilitado:** Configurado con Intercambio de Recursos de Origen Cruzado (CORS) para permitir el acceso controlado desde diferentes orígenes (configurados a través de variables de entorno).
*   **Variables de Entorno:** Utiliza archivos `.env` para gestionar información sensible como la URI de conexión a MongoDB y los orígenes permitidos para CORS.
*   **Validación de Datos**: El esquema de usuario se comprueba cuando se crea un nuevo usuario, si el cuerpo de la peticion no cumple los requisitos, el usuario no se creará.
*   **Manejador de paquetes**: Utiliza npm como manejador de paquetes.
*   **Scripts**: El proyecto tiene los scripts "start" para iniciar la app y "dev" para iniciar la app en modo dev con recarga en caliente.
* **Patrón DAO**: Implementa el patrón DAO.

## Tecnologías Utilizadas

*   **Node.js:** Entorno de ejecución de JavaScript.
*   **Express:** Framework web para Node.js.
*   **Mongoose:** Herramienta de modelado de objetos MongoDB.
*   **MongoDB:** Base de datos de documentos NoSQL.
*   **CORS:** Middleware para Intercambio de Recursos de Origen Cruzado.
*   **dotenv:** Para cargar variables de entorno desde archivos `.env`.

## Configuración del Proyecto

1.  **Clonar el repositorio:**
    ```bash
    git clone <your_repository_url>
    ```

2.  **Navegar al directorio del proyecto:**
    ```bash
    cd database
    ```

3.  **Instalar dependencias:**
    ```bash
    npm install
    ```

4.  **Crear un archivo `.env`:**
    *   Crea un archivo `.env` en el directorio raíz del proyecto.
    *   Añade las siguientes variables de entorno, reemplazando los valores de ejemplo con tus valores reales:

        ```properties
        PORT=8080
        MONGO_URI=mongodb+srv://david:say5527@cluster0.5hwbw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
        ALLOWED_ORIGINS=https://www.tudominio1.com,https://www.tudominio2.com
        ```

        *   **`PORT`:** El puerto en el que se ejecutará el servidor (por defecto: 8080).
        *   **`MONGO_URI`:** Tu cadena de conexión a MongoDB.
        *   **`ALLOWED_ORIGINS`:** Una lista de dominios separados por comas a los que se les permite acceder a la API.

5.  **Ejecutar la aplicación:**
    ```bash
    npm start
    ```

    O, para desarrollo con recarga en caliente:
    ```bash
    npm run dev
    ```

    El servidor se iniciará en `http://localhost:8080` (o el puerto especificado en tu archivo `.env`).

## Endpoints de la API

### Usuarios

*   **`GET /api/v1/users/`**
    *   **Descripción:** Obtiene una lista de todos los usuarios.
    *   **Respuesta:**
        *   `200 OK`: Devuelve un array de objetos de usuario.
        *   `500 Internal Server Error`: Si hay un error al obtener los usuarios.
    *   **Ejemplo de Respuesta:**
        ```json
        [
            {
                "_id": "661c04792f431c591a738326",
                "displayName": "oscar",
                "email": "oscar@email.com",
                "createdAt": "2024-04-14T01:55:37.540Z",
                "updatedAt": "2024-04-14T01:55:37.540Z",
                "__v": 0
            }
        ]
        ```

*   **`POST /api/v1/users/`**
    *   **Descripción:** Crea un nuevo usuario.
    *   **Cuerpo de la Petición:**
        ```json
        {
          "displayName": "Nombre de Usuario",
          "email": "usuario@ejemplo.com"
        }
        ```
    *   **Respuesta:**
        *   `201 Created`: Devuelve el objeto del usuario creado.
        *   `500 Internal Server Error`: Si hay un error al crear el usuario.
    *   **Ejemplo de Respuesta:**
        ```json
        {
            "_id": "661c04792f431c591a738326",
            "displayName": "oscar",
            "email": "oscar@email.com",
            "createdAt": "2024-04-14T01:55:37.540Z",
            "updatedAt": "2024-04-14T01:55:37.540Z",
            "__v": 0
        }
        ```

*   **`DELETE /api/v1/users/:id`**
    *   **Descripción**: Elimina un usuario por su id.
    *   **Parámetros**:
        *   `id` (String) : id del usuario a eliminar.
    *   **Respuesta:**
        *   `200 OK`: Devuelve un mensaje que indica que el usuario se eliminó correctamente.
        *   `404 Not Found`: Si no se encuentra el usuario.
        *   `500 Internal Server Error`: Si hay un error al eliminar el usuario.
    *   **Ejemplo de Respuesta**:
        ```json
        {
            "message": "usuario eliminado con exito"
        }
        ```

*   **`GET /`**
    *   **Descripción:** Comprueba si el servidor está en funcionamiento.
    *   **Respuesta:**
        *   `200 OK`: Devuelve el mensaje "El servidor esta corriendo".

## Estructura de Directorios

