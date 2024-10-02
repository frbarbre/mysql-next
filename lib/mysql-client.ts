import mysql, { ConnectionOptions } from "mysql2/promise";

const access: ConnectionOptions = {
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  port: 3306,
  host: process.env.DB_HOST!,
};
export async function mySQLClient() {
  return await mysql.createConnection(access);
}
