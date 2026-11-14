# Retail Analytics Dashboard

A full-stack retail analytics platform built with **React, TypeScript, Node.js, Express, and Amazon DynamoDB**. The application provides an interactive dashboard for exploring retail sales transactions and monitoring key business metrics.

## Overview

Retail Analytics Dashboard transforms sales transaction data into an accessible interface for monitoring business performance.

The application uses a React frontend connected to a REST API built with Node.js and Express. Sales records are stored and retrieved using Amazon DynamoDB, with DynamoDB Local supporting local development.

The development environment currently uses **150 synthetic sales transactions**.

## Features

- **Revenue Analytics:** Monitor total revenue generated across sales transactions.
- **Order Tracking:** View the total number of orders.
- **Units Sold:** Track the quantity of products sold.
- **Average Order Value:** Evaluate average revenue per transaction.
- **Sales Transaction Table:** Explore individual sales records.
- **Search and Filtering:** Find and narrow down transaction records.
- **Sorting and Pagination:** Navigate and organize sales data.
- **REST API Integration:** Retrieve sales data through backend endpoints.
- **Local Database Support:** Run the application using DynamoDB Local.

## Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | React, TypeScript, Vite |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | Amazon DynamoDB |
| API Communication | Axios |
| Development Database | DynamoDB Local |

## Architecture

The application follows a frontend-backend architecture:

1. The React frontend provides the dashboard interface.
2. Axios communicates with the backend REST API.
3. Express routes requests to controllers and services.
4. The backend retrieves and processes sales records.
5. Amazon DynamoDB stores the transaction data.
6. Processed results are returned to the frontend.

See [Architecture Documentation](docs/Architecture.md).

## Project Structure

```text
Retail-Analytics-Dashboard/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   ├── create-local-table.mjs
│   └── seed-local-data.mjs
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       └── services/
├── docs/
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- Java 17 or later
- DynamoDB Local

### 1. Clone the repository

```bash
git clone https://github.com/somya2323/Retail-Analytics-Dashboard.git
cd Retail-Analytics-Dashboard
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Copy `.env.example` to `.env` and configure the local DynamoDB connection and table settings.

### 3. Start DynamoDB Local

Start DynamoDB Local on port `8000` using your local installation.

### 4. Create the database table

From the backend directory:

```bash
node create-local-table.mjs
```

### 5. Seed sample transactions

```bash
node seed-local-data.mjs
```

This inserts 150 synthetic sales transactions into the local database.

### 6. Start the backend

```bash
npm run dev
```

Backend API:

`http://localhost:3000/api/sales`

### 7. Configure and start the frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

```env
VITE_API_URL=http://localhost:3000/api
```

Start the frontend:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## Development and Validation

Run frontend validation commands from the `frontend` directory:

```bash
npm run lint
npm run build
```

## Project Status

Actively developed. The current implementation includes sales analytics, transaction management, REST API integration, and local database support.

## Future Improvements

- Advanced sales visualizations
- Product and category performance analytics
- Date-based sales comparisons
- Enhanced reporting and filtering
- Improved dashboard experience
