import sqlite3 from "sqlite3";
import { fetchOne } from "./sql.js";

(async () => {
  const db = new sqlite3.Database("micweb.db");

  let sql = `SELECT * FROM contacts WHERE id = ?`;

  try {
    const product = await fetchOne(db, sql, [2]);
    console.log(product);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
})();