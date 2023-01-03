FROM node:18-alpine as build
WORKDIR /
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
RUN npm run build
COPY . .
CMD ["npm", "run", "start"]