# E-Commerce Project

An e-commerce application with a React frontend and a Node.js/Express backend.

## Technology stack

- **Frontend:** React 19, Vite, and JavaScript
- **Backend:** Node.js and Express

## Project structure

```text
ecommerce-project/
├── public/                 # Static frontend assets
├── src/                    # React application
├── package.json            # Frontend dependencies and scripts
└── README.md
```

The current repository contains the Vite-based React frontend. The Node.js/Express
backend is intended to run as a separate service; its source and setup instructions
are not included in this repository yet.

## Getting started

### Frontend

You’ll need [Node.js](https://nodejs.org/) and npm installed.

1. Open a terminal in the `ecommerce-project` directory.
2. Install the frontend dependencies:

   ```bash
   npm install
   ```

3. Start the Vite development server:

   ```bash
   npm run dev
   ```

Vite prints the local URL in the terminal when the server is ready.

### Backend

The backend will be a Node.js/Express service that provides API endpoints for the
frontend. Backend installation and run commands will be documented here when its
source code and package configuration are added.

## Available frontend scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the frontend development server |
| `npm run build` | Create a production frontend build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the frontend |
