# 🧪 Playwright E-Commerce Automation Framework

![CI](https://github.com/ridwan-amuda/playwright-ecommerce-framework/actions/workflows/playwright.yml/badge.svg)

A scalable end-to-end automation framework built using **Playwright, JavaScript, and Cucumber BDD**, supporting **UI, API, and Hybrid Automation Testing** with CI/CD integration, Docker support, reporting, environment management, and dynamic test data generation.

---

# 🚀 Overview

This framework demonstrates modern SDET practices and combines:

* UI Automation
* API Automation
* Hybrid UI + API Automation
* Cucumber BDD
* Playwright
* Page Object Model (POM)
* CI/CD Integration
* Docker Containerization
* Authentication State Reuse
* Dynamic Test Data Management

---

# ✅ Current Framework Capabilities

* UI Automation
* API Automation
* Hybrid UI + API Testing
* Cucumber BDD
* Page Object Model (POM)
* Page Object Manager Pattern
* Dynamic Test Data Generation
* Domain-Based API Architecture (UserAPI / ProductAPI)
* Authentication State Reuse (Playwright storageState)
* Cucumber Tags (Smoke, Regression, UI, API, Hybrid)
* Parallel Execution
* Retry Mechanism
* Screenshot Capture on Failure
* Environment Configuration
* GitHub Actions CI/CD
* Docker Support

---

# 🚀 Framework Highlights

## UI Automation

* Login validation
* Invalid login validation
* Product search
* Add product to cart
* Checkout workflow

## API Automation

* Get all products
* Search products
* Login API validation
* Create user API
* Delete user API

## Hybrid Automation

* Create user via API
* Login via UI using dynamically created user
* Delete user via API

## Framework Design & Engineering

* Page Object Model (POM)
* Page Object Manager Pattern
* Domain-Based API Architecture
* Dynamic Test Data Generation
* Environment Configuration using `.env`
* Authentication State Management using Playwright storageState
* Screenshot Capture on Failure
* Parallel Execution
* Retry Mechanism
* Cucumber Tags for Selective Execution

## DevOps & CI/CD

* GitHub Actions Pipeline
* Docker Containerization
* Automated Report Generation
* Headless Execution Support

---

# 🛠️ Technology Stack

| Category         | Technology              |
| ---------------- | ----------------------- |
| Language         | JavaScript (Node.js)    |
| UI Automation    | Playwright              |
| API Automation   | Playwright API Testing  |
| BDD              | Cucumber                |
| Design Pattern   | Page Object Model (POM) |
| Reporting        | Cucumber HTML Report    |
| CI/CD            | GitHub Actions          |
| Containerization | Docker                  |
| Configuration    | dotenv                  |
| Source Control   | Git & GitHub            |

---

# 📂 Project Structure

```text
playwright-ecommerce-framework/
│
├── features/
│   ├── ui/
│   ├── api/
│   └── hybrid/
│
├── step-definitions/
│   ├── ui/
│   ├── api/
│   └── hybrid/
│
├── pages/
│
├── api/
│   ├── ProductAPI.js
│   └── UserAPI.js
│
├── hooks/
│
├── scripts/
│   └── saveAuthState.js
│
├── storage/
│   └── auth.json (generated locally)
│
├── utils/
│
├── test-data/
│
├── reports/
│
├── .github/
│   └── workflows/
│
├── Dockerfile
├── cucumber.js
├── package.json
└── README.md
```

---

# 🏗️ Framework Architecture

```text
Feature Files
      │
      ▼
Step Definitions
      │
      ▼
Page Objects / API Classes
      │
      ▼
Playwright Engine
      │
      ▼
Application Under Test
```

---

# 🔐 Authentication State Reuse

The framework supports Playwright Authentication State Reuse using `storageState`.

Benefits:

* Eliminates repetitive login steps
* Reduces execution time
* Improves test stability
* Supports authenticated business-flow testing

Generate authentication state:

```bash
npm run auth:save
```

Generated file:

```text
storage/auth.json
```

Authenticated scenarios can be executed using:

```gherkin
@authenticated
Scenario: Logged in user views products
```

---

# 🧪 Test Execution

### Run Complete Framework

```bash
npm run test:bdd
```

### Run UI Tests

```bash
npm run test:ui
```

### Run API Tests

```bash
npm run test:api
```

### Run Hybrid Tests

```bash
npm run test:hybrid
```

### Run Smoke Suite

```bash
npm run test:smoke
```

### Run Regression Suite

```bash
npm run test:regression
```

### Generate Authentication State

```bash
npm run auth:save
```

---

# 🐳 Docker Execution

### Build Docker Image

```bash
docker build -t playwright-bdd-framework .
```

### Run Framework Inside Docker

```bash
docker run --rm playwright-bdd-framework
```

---

# ⚙️ Environment Configuration

Create a `.env` file:

```env
BASE_URL=https://automationexercise.com
API_BASE_URL=https://automationexercise.com/api
HEADLESS=true
```

The framework dynamically loads environment variables using `dotenv`.

---

# 📊 Reporting

Framework supports:

* Cucumber HTML Reports
* JSON Reports
* Screenshot Capture on Failure
* GitHub Actions Artifacts

---

# 🔄 CI/CD

The framework automatically executes through GitHub Actions:

* On every push
* On pull requests
* Generates execution reports
* Supports headless browser execution
* Publishes execution artifacts

---

# 🔧 Challenges Solved During Framework Development

* Resolved Linux case-sensitivity issues affecting CI execution (`ProductAPI.js` vs `productAPI.js`)
* Implemented reusable cookie-consent handling to prevent UI interaction failures
* Stabilized flaky UI tests using explicit waits and synchronization strategies
* Added environment-based configuration to support multiple execution environments
* Implemented screenshot capture for failure analysis
* Introduced authentication state reuse using Playwright storageState
* Containerized framework execution using Docker
* Integrated automated execution through GitHub Actions CI/CD pipeline

---


# 👨‍💻 Author

**Ridwan Amuda**

Senior QA Automation Engineer | SDET | Playwright | API Testing | CI/CD | Test Framework Design
