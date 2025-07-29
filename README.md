# 🧩 React Component Library – Form, Input, Button

A lightweight and reusable React component library built with **TypeScript**, **Tailwind CSS**, and **Rollup** — designed for scalable, accessible, and customizable UIs. Includes essential form components such as `Form`, `Input`, and `Button`.

![npm](https://img.shields.io/npm/v/react-component-library-kumarith)
![types](https://img.shields.io/npm/types/react-component-library-kumarith)
![build](https://img.shields.io/github/actions/workflow/status/kumarith/react-component-lib/ci.yml)
![license](https://img.shields.io/npm/l/react-component-library-kumarith)

---

## ✨ Features

- 🔧 **Reusable**: Ready-to-use for React applications  
- 🧑‍🎨 **Customizable**: Tailwind-based styling for easy theming  
- 🧠 **Typed**: Fully written in TypeScript with exported types  
- 🧪 **Documented**: Interactive docs via Storybook

---

## 📦 Installation 

```bash
npm install react-component-library-kumarith
# or
yarn add react-component-library-kumarith
```

---

## Playwright E2E

- Install Playwright dependencies and browsers
npx playwright install --with-deps

- Run tests
npm run test:e2e

- View tests report
npx playwright show-report

---

## GithubActions CI Workflow 

- This project includes a CI pipeline that:
- Runs on push and pull_request to the main branch
- Installs Node.js and project dependencies
- Runs Playwright E2E tests
- Uploads Playwright test reports

---

## 📄 Usage

```tsx
import React from "react";
import { Form, Input, KButton } from "react-component-library-kumarith";

function ContactForm() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input label="Email" name="email" placeholder="Enter your email" />
      <KButton type="submit">Submit</KButton>
    </Form>
  );
}
```

---

## 🧱 Components

### 🧩 Form Component

A wrapper for form elements. Accepts standard `onSubmit` props and children.

```tsx
<Form onSubmit={handleSubmit}>{children}</Form>
```

---

### 🔤 Input Component

Styled input with optional `label`, `name`, and `placeholder`.

```tsx
<Input label="Name" name="name" placeholder="Enter your name" onChange={(e) => onChange(e.target.value)} />
```

---

### 🟦 KButton Component

Styled button with `type`, `variant`, and optional `disabled`.

```tsx
<KButton type="submit" variant="primary" onClick={onClick}>Submit</KButton>
```

---

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Rollup** (for bundling)
- **Storybook** (for documentation)

---

## 🧪 Development

```bash
# Run Storybook locally
npm run storybook

# Build the library
npm run build

# Publish to npm
npm publish --access public
```

---

## 🔗 Live Links

- 🚀 **Storybook (Live Preview on Netlify)**: [https://react-component-lib-kumarith.netlify.app/](https://react-component-lib-kumarith.netlify.app/)
- 📦 **NPM Package**: [https://www.npmjs.com/package/react-component-library-kumarith](https://www.npmjs.com/package/react-component-library-kumarith)
- 💻 **GitHub Repository**: [https://github.com/kumarith/react-component-lib](https://github.com/kumarith/react-component-lib)

---
