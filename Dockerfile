# Usa una imagen base de Node.js
FROM node:16 AS build

# Crea y usa el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY myreact/package.json myreact/package-lock.json ./
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY myreact ./

# Construye la aplicación
RUN npm run build

# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos al contenedor de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para que la aplicación sea accesible
EXPOSE 80

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
