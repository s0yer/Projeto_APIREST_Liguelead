
# Build para a Imagem
FROM node:20-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Fase Producao
FROM node:20-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY . .
EXPOSE 8081
CMD ["node", "src/server.js"]