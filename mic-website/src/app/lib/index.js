import sqlite3 from "sqlite3";
import { execute} from "./sql.js";

(async () => {

  const db = new sqlite3.Database("micweb.db");
  const sql = `INSERT INTO contacts(name, description) VALUES(?, ?)`;
  try {
    await execute(db, sql, ["Address","2 Peck Street, Taita, Lower Hutt, Wellington 5011"]);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
})();
