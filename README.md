# Retail Analytics Dashboard

A full-stack retail analytics dashboard built using React, TypeScript, Node.js, Express, and Amazon DynamoDB.

## Overview

This project provides an interactive interface for monitoring retail sales performance. It connects a React frontend to a Node.js backend, which retrieves and processes sales records stored in DynamoDB.

The local development setup uses DynamoDB Local and 150 synthetic sales transactions.

## Features

- **Revenue Analytics:** View total revenue generated.
- **Order Tracking:** Monitor the total number of orders.
- **Units Sold:** Track the quantity of products sold.
- **Average Order Value:** Calculate average revenue per order.
- **Sales Table:** Explore individual transaction records.
- **REST API Integration:** Retrieve sales data through backend endpoints.
- **Data Processing:** Backend services handle data retrieval and summary calculations.

## Dashboard Metrics

| Metric | Description |
|---|---|
| Total Revenue | Combined value of sales |
| Total Orders | Number of transactions |
| Units Sold | Total quantity sold |
| Average Order Value | Revenue divided by orders |

## Technology Stack

**Frontend**
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- JavaScript

**Database**
- Amazon DynamoDB
- DynamoDB Local

## Project Structure

```text
Retail-Analytics-Dashboard/
├── backend/
├── frontend/
├── docs/
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js and npm
- Java 17 or later
- DynamoDB Local

### Backend Setup

```bash
cd backend
npm install
```

Copy `.env.example` to `.env` and configure your local DynamoDB settings.

Start the backend:

```bash
npm run dev
```

### Seed Sample Data

From the backend directory, open another terminal and run:

```bash
node seed-local-data.mjs
```

This inserts synthetic sales transactions into DynamoDB Local.

### Frontend Setup

```bash
cd frontend
npm install
```

Create `frontend/.env` with:

```env
VITE_API_URL=http://localhost:3000/api
```

Start the frontend:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Future Improvements

- Advanced sales visualizations
- Product and category performance analysis
- Date-based sales comparisons
- Improved filtering and reporting

## Acknowledgements

This project is an adapted and extended version of the original Retail Management System.

Original source repository:

https://github.com/Xskull27/Retail_Management_System_

The current version includes modifications and extensions focused on retail analytics, dashboard metrics, and local development functionality.