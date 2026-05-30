# 🧪 Playwright E-Commerce Automation Framework

![CI](https://github.com/ridwan-amuda/playwright-ecommerce-framework/actions/workflows/playwright.yml/badge.svg)

A scalable end-to-end automation framework built using **Playwright, JavaScript, and Cucumber BDD**, supporting **UI, API, and Hybrid Automation Testing** with CI/CD integration, Docker support, reporting, and dynamic test data management.

---

## ✅ Current Framework Capabilities

* UI Automation
* API Automation
* Hybrid UI + API Testing
* Cucumber BDD
* Page Object Model (POM)
* Page Object Manager Pattern
* Dynamic Test Data Generation
* Domain-Based API Architecture (UserAPI / ProductAPI)
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
* Login via UI using created user
* Delete user via API

## Framework Engineering

* Page Object Model (POM)
* Page Object Manager Pattern
* Domain-based API architecture
* Dynamic test data generation
* Environment configuration using `.env`
* Screenshot capture on failure
* Parallel execution
* Retry mechanism
* Cucumber tags for selective execution

## DevOps & CI/CD

* GitHub Actions pipeline
* Docker support
* Automated report generation

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
├── README.md
```

---

# 🏗️ Framework Architecture

```text
Feature File
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

# 🧪 Test Execution

### Run complete framework

```bash
npm run test:bdd
```

### Run UI tests

```bash
npm run test:ui
```

### Run API tests

```bash
npm run test:api
```

### Run Hybrid tests

```bash
npm run test:hybrid
```

### Run Smoke suite

```bash
npm run test:smoke
```

### Run Regression suite

```bash
npm run test:regression
```

---

# 🐳 Docker Execution

### Build Docker image

```bash
docker build -t playwright-bdd-framework .
```

### Run framework inside Docker

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

---

# 📊 Reporting

Framework supports:

* Cucumber HTML Reports
* JSON Reports
* Screenshot capture on failure
* GitHub Actions artifacts

---

# 🔄 CI/CD

The framework automatically executes through GitHub Actions:

* On every push
* On pull requests
* Generates execution reports
* Supports headless browser execution

---

# 🎯 Key Learning Objectives

This framework demonstrates:

* UI Automation
* API Automation
* Hybrid Automation
* Test Framework Design
* CI/CD Integration
* Docker Containerization
* Dynamic Test Data Handling
* Scalable Automation Architecture

---

# 🚀 Future Enhancements

* Jenkins Pipeline Integration
* Azure DevOps Pipeline Integration
* Test Analytics Dashboard
* Cross-Browser Execution Matrix
* Cloud Execution Support

---

# 👨‍💻 Author

**Ridwan Amuda**

Automation Engineer | SDET | Playwright | API Testing | CI/CD
