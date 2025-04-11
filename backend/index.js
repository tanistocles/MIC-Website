import express from "express";
import sqlite3 from "sqlite3";
import { fetchAll } from "./src/sql.js";

const app = express();
const port = 8080;

app.get('/all', (req, res) => {
    
    (async () => {
    const db = new sqlite3.Database("./src/micweb.db");

    // fetch all products
    let sql = `SELECT * FROM contacts`;

    try {
        const products = await fetchAll(db, sql);
        console.log(products);
        res.send(products);
    } catch (err) {
        console.log(err);
    } finally {
        db.close();
    }
    })();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
