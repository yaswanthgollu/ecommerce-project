# E-Commerce Project

This repository contains a React/Vite storefront and its backend in separate
folders.

## Project structure

```text
ecommerce-project/
|-- ecommerce-frontend/   # React and Vite application
|-- ecommerce-backend/    # Express API
|-- .gitignore
`-- README.md
```

## Run the frontend

```bash
cd ecommerce-frontend
npm install
npm run dev
```

The frontend is available at the local URL printed by Vite. Its client-side
routes include `/`, `/checkout`, `/orders`, and `/tracking`.

## Run the backend

In a separate terminal:

```bash
cd ecommerce-backend
npm install
npm run dev
```

See [ecommerce-backend/README.md](ecommerce-backend/README.md) for backend
configuration and troubleshooting details.
