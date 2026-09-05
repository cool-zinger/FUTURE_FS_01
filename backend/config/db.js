import mysql from "mysql2/promise";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly load backend/.env
dotenv.config({
  path: path.join(__dirname, "../.env"),
});

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", JSON.stringify(process.env.DB_USER));
console.log("DB_NAME:", process.env.DB_NAME);
// Never print DB_PASSWORD

if (!process.env.DB_USER) {
  throw new Error(
    "DB_USER is missing. Check backend/.env and make sure it contains DB_USER=root"
  );
}

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;