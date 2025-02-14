import { createClient } from "@supabase/supabase-js";

const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const database = createClient(DATABASE_URL, DATABASE_PASSWORD);

export default database;
