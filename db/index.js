import pg from "pg";
const databaseUrl = process.env.POSTGRES_CONNECTION_URL;

export const pool = new pg.Pool({
  connectionString: databaseUrl,
});