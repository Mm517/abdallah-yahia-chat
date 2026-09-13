import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const { Pool } = pg;

const databaseUrl = process.env.SUPABASE_DB_URL ?? process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "SUPABASE_DB_URL must be set — use the Supabase project's connection string " +
      "(Project Settings → Database → Connection string, pooled 'Transaction' " +
      "mode for serverless, or the direct connection for a long-lived server).",
  );
}

// Supabase's Postgres always requires TLS.
export const pool = new Pool({
  connectionString: databaseUrl,
  ssl: { rejectUnauthorized: false },
});
export const db = drizzle(pool, { schema });

export * from "./schema";
