FROM mcr.microsoft.com/playwright:v1.50.0-noble

WORKDIR /app

COPY package*.json ./
ENV HUSKY_SKIP_INSTALL=1
RUN npm ci

COPY . .

ENV CI=true
ENV PLAYWRIGHT_BROWSERS_PATH=0

ENTRYPOINT ["npm", "run"]
CMD ["test:ci"]