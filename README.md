# E-Commerce Project

A frontend e-commerce storefront built with React and Vite. It includes sample
product, checkout, order history, and package tracking pages.

## Technology stack

- React 19
- React Router 7
- Vite 6
- JavaScript and CSS

This repository currently contains a frontend demo. It does not include a
Node.js/Express API or a connected database; the displayed product, checkout,
order, and tracking information is sample content.

## Getting started

### Requirements

- [Node.js](https://nodejs.org/) (which includes npm)

### Install and run

From the project directory, install dependencies and start the Vite development
server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser. The app uses client-side
routing, so the following pages are available:

| Route | Page |
| --- | --- |
| `/` | Storefront |
| `/checkout` | Checkout |
| `/orders` | Order history |
| `/tracking` | Package tracking |

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
ecommerce-project/
├── public/
│   └── images/             # Logos, product photos, ratings, and UI icons
├── src/
│   ├── components/         # Shared UI components, including the header
│   ├── pages/              # Storefront, checkout, orders, and tracking pages
│   ├── assets/             # Application source assets
│   ├── App.jsx             # Route definitions
│   ├── main.jsx            # React entry point
│   └── *.css               # Global and application styles
├── starting-code/          # Reference/sample files and JSON data
├── index.html              # Vite HTML entry point
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```
