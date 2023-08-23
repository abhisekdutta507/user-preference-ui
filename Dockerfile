FROM node:18.17.1-alpine3.18

WORKDIR /project/user-preference-ui
COPY *.json ./

RUN npm install --silent

COPY ./public ./public
COPY ./src ./src

ENV PORT=3000
EXPOSE ${PORT}

CMD ["npm", "run", "start"]