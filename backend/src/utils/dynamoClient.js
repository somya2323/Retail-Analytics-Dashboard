
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";

dotenv.config();

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || "us-east-1",
  endpoint: process.env.DYNAMODB_ENDPOINT || undefined,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "local",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "local",
  },
});

export const ddbDocClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
  },
  unmarshallOptions: {
    wrapNumbers: false,
  },
});
