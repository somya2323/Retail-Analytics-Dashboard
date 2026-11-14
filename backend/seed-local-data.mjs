import { BatchWriteCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./src/utils/dynamoClient.js";

const names = [
  "Aarav Sharma", "Priya Singh", "Rohan Verma",
  "Ananya Gupta", "Ishaan Kumar", "Meera Patel",
  "Kabir Mehta", "Diya Reddy", "Arjun Nair",
  "Sara Khan", "Vivaan Das", "Ira Joshi",
  "Aditya Rao", "Nisha Iyer", "Reyansh Shah"
];

const regions = ["North", "South", "East", "West", "Central"];
const genders = ["Male", "Female"];
const categories = [
  "Electronics", "Clothing", "Groceries",
  "Furniture", "Beauty", "Sports"
];
const payments = ["Credit Card", "Debit Card", "UPI", "Cash", "Net Banking"];
const tagOptions = ["New", "Returning", "Online", "In-Store", "Discount"];

const records = [];

for (let i = 1; i <= 150; i++) {
  const quantity = Math.floor(Math.random() * 5) + 1;
  const unitPrice = Math.floor(Math.random() * 4500) + 200;
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 365));

  records.push({
    TransactionID: `SALE-${String(i).padStart(4, "0")}`,
    Date: date.toISOString().split("T")[0],
    CustomerName: names[Math.floor(Math.random() * names.length)],
    PhoneNumber: `90000${String(10000 + i).slice(-5)}`,
    Gender: genders[Math.floor(Math.random() * genders.length)],
    Age: Math.floor(Math.random() * 43) + 18,
    ProductCategory: categories[Math.floor(Math.random() * categories.length)],
    Quantity: quantity,
    TotalAmount: quantity * unitPrice,
    CustomerRegion: regions[Math.floor(Math.random() * regions.length)],
    PaymentMethod: payments[Math.floor(Math.random() * payments.length)],
    Tags: [tagOptions[Math.floor(Math.random() * tagOptions.length)]]
  });
}

for (let i = 0; i < records.length; i += 25) {
  const batch = records.slice(i, i + 25);

  await ddbDocClient.send(new BatchWriteCommand({
    RequestItems: {
      SalesTable: batch.map(Item => ({ PutRequest: { Item } }))
    }
  }));
}

console.log(`Successfully inserted ${records.length} synthetic sales records.`);
