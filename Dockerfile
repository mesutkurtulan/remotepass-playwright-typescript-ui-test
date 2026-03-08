# Stage 1: Builder
FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright
RUN npx playwright install --with-deps chromium

# Stage 2: Final
FROM node:20-slim

WORKDIR /app

COPY --from=builder /app /app
COPY --from=builder /root/.cache/ms-playwright /root/.cache/ms-playwright

ENV CI=true
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

ENTRYPOINT ["npm", "run"]
CMD ["test:ci"]