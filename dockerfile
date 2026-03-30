# Build the Frontend [dist folder]
# copy the dist folder to the backend's public folder

FROM node:20-alpine as frontend-builder

COPY ./Frontend /app

WORKDIR /app

RUN npm install

RUN npm run build

# Build the Backend

FROM node:20-alpine

COPY ./Backend /app

WORKDIR /app

RUN npm install

# Copy the built frontend from the previous stage to the public folder of the backend
COPY --from=frontend-builder /app/dist /app/public

CMD [ "node", "server.js"]

