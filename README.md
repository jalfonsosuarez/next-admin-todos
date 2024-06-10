# Development

Pasos para levantar la APP en desarrollo.

- Tener instalado Docker
  `https://www.docker.com/get-started/`

- Renombrar el .env.template a .env
- Establecer los valores de las variables de entorno.

- Levantar la base de datos
  `docker compose up -d`

- Instalar módulos de Node `npm i`

- Levantar el proyecto
  `npm run dev`

- Ejecutar los comamandos de Prisma

```
npx prisma migrate dev
npx prima generate
```

- [Añadir datos de prueba a la base de datos](localhost:3000/api/seed)

# Instalar Prisma

```
npx prisma init
```
