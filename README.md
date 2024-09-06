# Playwright + Cucumber + Page Object Model

![Playwright](https://playwright.dev/img/playwright-logo.svg)

This project is a test automation framework using **Playwright**, **Cucumber**, and the **Page Object Model (POM)** design pattern. The purpose of this project is to provide a maintainable, scalable, and easy-to-read structure for automated UI tests.

## Project Structure

The project follows the **Page Object Model (POM)** design pattern, where web elements are separated into reusable page classes, making the test cases easy to maintain and scale.

### Folder Structure:
```text
├── features               # Cucumber feature files (Gherkin)
│   └── example.feature
├── pages                  # Page Object Model classes
│   └── HomePage.ts
│   └── LoginPage.ts
├── steps                  # Cucumber step definitions
│   └── stepDefinitions.ts
├── support                # Additional support files (e.g., hooks)
│   └── hooks.ts
├── cucumber-report        # Cucumber reports and screenshots
├── playwright.config.ts   # Playwright configuration file
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration file
└── README.md              # Project documentation
