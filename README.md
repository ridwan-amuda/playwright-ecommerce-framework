# 🧪 Playwright E-Commerce BDD Automation Framework

A production-style **UI + API automation framework** built using **Playwright + JavaScript + Cucumber (BDD)**.

---

## 🚀 Overview

This framework is designed following **SDET best practices**, combining:

- Behavior Driven Development (BDD) using Cucumber
- UI automation using Playwright
- Scalable and maintainable framework structure
- Reusable components and Page Object Model (POM)

---

## 🛠️ Tech Stack

- **Automation:** Playwright
- **BDD:** Cucumber (Gherkin)
- **Language:** JavaScript (Node.js)
- **Test Design:** Page Object Model (POM)
- **CI/CD:** GitHub Actions
- **Reporting:** HTML Reports 

---

## 📂 Project Structure

```text
playwright-ecommerce-bdd-framework/
│
├── features/
│   ├── ui/
│   │   ├── login.feature
│   │   ├── search.feature
│   │   ├── cart.feature
│   │   └── checkout.feature
│   └── api/
│       ├── products.feature
│       ├── searchProduct.feature
│       └── loginApi.feature
│
├── step-definitions/
│   ├── ui/
│   │   ├── loginSteps.js
│   │   ├── searchSteps.js
│   │   ├── cartSteps.js
│   │   └── checkoutSteps.js
│   └── api/
│       ├── productsSteps.js
│       └── loginApiSteps.js
│
├── pages/             # Page Object Model classes
├── hooks/             # Setup and teardown logic
├── utils/             # Reusable utilities
├── test-data/         # Test data (JSON)
├── reports/           # Test reports
│
├── cucumber.js        # Cucumber configuration
├── package.json
├── README.md
