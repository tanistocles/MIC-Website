import sqlite3 from "sqlite3";
import { fetchAll } from "./sql.js";

export async function fetchContacts() {
    
    const db = new sqlite3.Database("./src/app/lib/micweb.db");

    // fetch all products
    let sql = `SELECT * FROM contacts`;

    try {
        const data = await fetchAll(db, sql);
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    } finally {
        db.close();
    }
}