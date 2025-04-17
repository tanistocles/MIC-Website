import sqlite3 from "sqlite3";
import { execute, fetchAll, fetchOne } from "./sql.js";

export async function createContactTable() {
    
  const db = new sqlite3.Database("micweb.db");
  try {
    await execute(
      db,
      `CREATE TABLE IF NOT EXISTS contacts(
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL)`
    );
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
}

export async function fetchContacts() {

  const db = new sqlite3.Database("micweb.db");

  // fetch all products
  const sql = `SELECT * FROM contacts`;

  try {
      return await fetchAll(db, sql);
  } catch (err) {
      console.log(err);
  } finally {
      db.close();
  }
}

export async function fetchContactId(id : number) {

  const db = new sqlite3.Database("micweb.db");

  const sql = `SELECT * FROM contacts WHERE id = ?`;

  try {
    const data = await fetchOne(db, sql, [id]);
    return data;
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
}

export async function insertRow(name: string, description: string) {
  const db = new sqlite3.Database("micweb.db");
  const sql = `INSERT INTO contacts(name, description) VALUES(?, ?)`;
  try {
    await execute(db, sql, [name,description]);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
}

export async function editRow(id: number, description: string) {
  const db = new sqlite3.Database("micweb.db");
  const sql = `UPDATE contacts SET description=? WHERE id = ?`;
  try {
    await execute(db, sql, [`${description}`,`${id}`]);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
}