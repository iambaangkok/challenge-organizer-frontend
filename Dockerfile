FROM node:18-alpine as build
WORKDIR /challenge-organizer-frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]