import sqlite3 from "sqlite3";
import { fetchAll } from "./sql.js";

(async () => {
  const db = new sqlite3.Database("micweb.db");

  // fetch all products
  let sql = `SELECT * FROM contacts`;

  try {
    const products = await fetchAll(db, sql);
    console.log(products);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
})();
