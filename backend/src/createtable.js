import sqlite3 from "sqlite3";
import { execute } from "./sql.js";

export const createTable = async () => {
  const db = new sqlite3.Database("micweb.db");
  try {
    await execute(
      db,
      `CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL)`
    );
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
};