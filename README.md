# CRUD Mascotas con Express, Sequelize

Proyecto backend sencillo para administrar la tabla `TB_MASCOTAS`.

## Instalacion

```bash
npm install
```

## Variables de entorno

Copia `.env_example` a `.env` y ajusta los valores si lo necesitas.

```env
PORT=3000
API_PREFIX=/api
DB_DIALECT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mascotas_db
DB_USER=postgres
DB_PASSWORD=postgres
```

## Ejecutar

```bash
npm run dev
```

Antes de iniciar, crea la base de datos en PostgreSQL:

```sql
CREATE DATABASE mascotas_db;
```

Al iniciar, Sequelize se conecta a PostgreSQL y crea automaticamente la tabla `TB_MASCOTAS`.

## Rutas

Base URL: `http://localhost:3000/api/mascotas`

- `GET /` lista mascotas
- `GET /:id` obtiene una mascota
- `POST /` crea una mascota
- `PUT /:id` actualiza una mascota
- `DELETE /:id` elimina una mascota

## Ejemplo de body

```json
{
  "nombre": "Firulais",
  "raza": "Labrador",
  "tipo": "Perro",
  "peso": 22.5,
  "edad": 4,
  "vacunado": true
}
```
