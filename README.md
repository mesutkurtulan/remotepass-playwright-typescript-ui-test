# RemotePass UI Automation Framework

A **production-grade UI automation testing framework** built with **TypeScript + Playwright Test** to validate the RemotePass Website.

This project was designed as a **clean, scalable, and maintainable UI test architecture**, covering:

- Full UI coverage
- Strong code quality standards
- Reporting & observability
- Dockerized execution
- CI/CD integration

> This is not a simple test suite — it is a reusable UI testing framework.

---

## Tech Stack

| Area              | Tooling                          |
|-------------------|----------------------------------|
| Language          | TypeScript                       |
| Test Framework    | Playwright Test (UI mode)        |
| Reporting         | Playwright HTML + Allure         |
| Lint & Format     | ESLint, Prettier, Husky          |
| Containerization  | Docker                           |
| CI/CD             | GitHub Actions                   |

---

## What This Project Demonstrates

This framework was intentionally built to demonstrate:

- Proper UI test architecture
- Separation of concerns (pages / tests / utils )
- Reusability and readability
- Enterprise-level reporting
- Containerized test execution
- Automated CI pipeline
- Code quality enforcement before commit/push

---

## Project Structure

```
remotepass-ui-tests/
├── .github/workflows/        # CI pipeline
├── src/
│   ├── features/
│   │   ├── pages/            # Locators and Methods for Individual Pages
│   ├── tests/
│   |   ├── home.specs.ts/    # HomePage tests
│   └── utils/                # Helper and Data class
├── Dockerfile
├── playwright.config.ts
└── README.md
```

---

## Test Coverage

### Books API — Full Coverage

- Create Book
- Get Book(s)
- Update Book
- Delete Book
- Field validations
- Boundary values
- Missing fields
- Invalid types
- Negative numbers
- Null / empty payloads

> 72 test cases covering both happy paths and edge scenarios.

### Authors API — Optional Extension

Additional coverage to demonstrate framework scalability.

---

## ⚙️ Setup

### Prerequisites

- Node.js ≥ 18
- Docker
- Git

### Installation

```bash
git clone https://github.com/mesutkurtulan/remotepass-playwright-typescript-ui-test
cd remotepass-playwright-typescript-ui-test
npm install
npm run prepare
npx playwright install chromium
```

---

## Running Tests Locally

```bash
npm test
npm run test:headed
npm run test:ci
```

---

## Reports

### Playwright HTML Report

```bash
npm run report:html
```

### Allure Report

```bash
npm run report:allure
```

---

## Running Tests in Docker (Recommended)

Build image:

```bash
docker build -t remotepass-ui-tests:latest .
```

Run tests:

```bash
docker run --rm \
  -e BASE_URL=https://fakerestapi.azurewebsites.net \
  -v "$(pwd)/playwright-report:/app/playwright-report" \
  -v "$(pwd)/allure-results:/app/allure-results" \
  remotepass-ui-tests:latest
```

View reports:

```bash
npx playwright show-report playwright-report/html
npm run report:allure
```

---

## Code Quality

| Tool      | Purpose                          |
|-----------|----------------------------------|
| ESLint    | TypeScript & Playwright rules   |
| Prettier  | Consistent formatting           |
| Husky     | Pre-commit format, pre-push lint|

```bash
npm run format
npm run lint
npm run lint:fix
```

---

## CI/CD Pipeline

GitHub Actions workflow:

- Triggers on push / pull request
- Builds Docker image
- Runs tests inside container
- Publishes Playwright & Allure reports as artifacts

Reports can be downloaded from the **Actions** tab.

---

## Environment Variables

| Variable | Default                                      |
|----------|----------------------------------------------|
| BASE_URL | https://www.remotepass.com/                  |

---

## Why This Project Stands Out

Unlike basic UI test projects, this framework emphasizes:

- Maintainability
- Scalability
- Clean architecture
- Test reliability
- Professional reporting
- Real-world DevOps practices

---

## Happy Testing