FROM mcr.microsoft.com/playwright:v1.58.2-noble

WORKDIR /app

COPY package*.json ./
ENV HUSKY_SKIP_INSTALL=1
RUN npm ci

COPY . .

ENV PLAYWRIGHT_BROWSERS_PATH=0
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

ENV CI=true

ENTRYPOINT ["npm", "run"]
CMD ["test:ci"]