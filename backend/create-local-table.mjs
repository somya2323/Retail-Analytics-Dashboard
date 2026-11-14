import { DynamoDBClient, CreateTableCommand, ListTablesCommand } from "@aws-sdk/client-dynamodb";
import dotenv from "dotenv";

dotenv.config();

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || "us-east-1",
  endpoint: process.env.DYNAMODB_ENDPOINT || "http://localhost:8000",
  credentials: {
    accessKeyId: "local",
    secretAccessKey: "local",
  },
});

const tableName = process.env.SALES_TABLE_NAME || "SalesTable";

try {
  const existing = await client.send(new ListTablesCommand({}));

  if (existing.TableNames.includes(tableName)) {
    console.log(`Table ${tableName} already exists.`);
  } else {
    await client.send(new CreateTableCommand({
      TableName: tableName,
      AttributeDefinitions: [
        { AttributeName: "TransactionID", AttributeType: "S" }
      ],
      KeySchema: [
        { AttributeName: "TransactionID", KeyType: "HASH" }
      ],
      BillingMode: "PAY_PER_REQUEST"
    }));

    console.log(`Table ${tableName} created successfully.`);
  }
} catch (error) {
  console.error("Table setup failed:", error.message);
  process.exitCode = 1;
} finally {
  client.destroy();
}
