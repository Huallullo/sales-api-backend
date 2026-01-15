# Sales API Backend

API REST desarrollada con **Node.js**, **Express** y **SQL Server** para la gestión de clientes.  
El proyecto implementa un CRUD completo siguiendo buenas prácticas de desarrollo backend y una arquitectura modular orientada a entornos profesionales.

---

## Tecnologías

- Node.js
- Express.js
- SQL Server
- mssql
- dotenv
- Git & GitHub
- Postman

---

## Estructura del Proyecto
sales-api-backend/:
```
├── src/
│ ├── app.js
│ ├── config/
│ │ └── database.js
│ ├── controllers/
│ │ └── clients.controller.js
│ └── routes/
│ └── clients.routes.js
├── .env
├── .gitignore
├── package.json
└── README.md



---

## Configuración

Crear un archivo `.env` en la raíz del proyecto:

DB_SERVER=localhost
DB_NAME=SalesDB
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_PORT=1433


---

## Instalación y Ejecución

```bash
npm install
node src/app.js

Servidor disponible en:


http://localhost:3000
Endpoints
Obtener clientes

GET /clients

Crear cliente

POST /clients
Body:

json

{
  "name": "Juan Pérez",
  "email": "juan@test.com"
}
Actualizar cliente

PUT /clients/:id

Eliminar cliente

DELETE /clients/:id

Buenas Prácticas Aplicadas
Arquitectura modular (routes, controllers, config)

Consultas SQL parametrizadas

Manejo de errores

Uso de variables de entorno

Autor
Abel Huallullo
Backend Developer Jr

GitHub: https://github.com/Huallullo
LinkedIn: https://www.linkedin.com/in/abel-eduardo-huallullo-matos-1647b418b


