FROM mcr.microsoft.com/playwright:v1.58.2-noble

WORKDIR /app

COPY package*.json ./
ENV HUSKY_SKIP_INSTALL=1
RUN npm ci

COPY . .

ENV CI=true

ENTRYPOINT ["npm", "run"]
CMD ["test:ci"]