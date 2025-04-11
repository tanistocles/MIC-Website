import sqlite3 from "sqlite3";
import { execute } from "./sql.js";

const main = async () => {
  const db = new sqlite3.Database("./micweb.db");
  const sql = `INSERT INTO contacts(name, description) VALUES(?, ?)`;
  try {
    await execute(db, sql, ["Phone", "01 234 5678"]);
    await execute(db, sql, ["Email", "admin@admin.co.nz"]);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
};

main();