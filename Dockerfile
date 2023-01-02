FROM node:18-alpine as build
WORKDIR /challenge-organizer-frontend
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
RUN npm run build
COPY .next .next
CMD ["next", "start"]