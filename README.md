# Lumina — Luxury Shopify Theme

[![Store](https://img.shields.io/badge/Store-markeu--2.myshopify.com-blue?style=flat-square&logo=shopify)](https://markeu-2.myshopify.com)
[![Shopify CLI](https://img.shields.io/badge/Shopify_CLI-v3-green?style=flat-square&logo=shopify)](https://shopify.dev/docs/themes/tools/cli)
[![GitHub](https://img.shields.io/badge/Repository-EmonAhammed1%2FLumina-black?style=flat-square&logo=github)](https://github.com/EmonAhammed1/Lumina)

---

## 🌐 Quick Links & Access

- **Live Website:** [https://markeu-2.myshopify.com](https://markeu-2.myshopify.com)
- **Theme Editor / Customizer:** [Shopify Theme Editor (#204267913555)](https://markeu-2.myshopify.com/admin/themes/204267913555/editor)
- **Shopify Admin Themes:** [Shopify Admin Theme Management](https://markeu-2.myshopify.com/admin/themes)
- **GitHub Repository:** [https://github.com/EmonAhammed1/Lumina](https://github.com/EmonAhammed1/Lumina)

---

## 📁 Repository Structure

```text
Lumina/
├── assets/          # CSS, JavaScript, fonts, and theme assets
├── config/          # Theme settings, schemas, and configurations (settings_data.json)
├── layout/          # Theme layouts (theme.liquid, password.liquid)
├── locales/         # Language and translation files (en.default.json, etc.)
├── sections/        # Modular, dynamic theme sections
├── snippets/        # Reusable liquid snippets and UI components
├── templates/       # JSON and Liquid page, product, and collection templates
├── .gitignore       # Git ignore rules for Shopify CLI & OS artifacts
└── README.md        # Project documentation and links
```

---

## 🛠️ Development Workflow

### 1. Connect & Start Local Development
To run a local hot-reloading development server connected to the live store:
```bash
shopify theme dev --store markeu-2.myshopify.com
```

### 2. Pull Latest Changes from Shopify
```bash
shopify theme pull --store markeu-2.myshopify.com --live
```

### 3. Push Local Changes to Shopify
```bash
# Push to development theme
shopify theme push --store markeu-2.myshopify.com --development

# Or push directly to live theme (use caution)
shopify theme push --store markeu-2.myshopify.com --live
```

---

## 🚀 Version Control

- **Primary Branch:** `main`
- **Remote:** `origin` (`https://github.com/EmonAhammed1/Lumina.git`)
