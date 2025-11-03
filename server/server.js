import express from "express";
import mysql from "mysql2";

import cors from "cors";




const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
  });

//  GET all products
app.get("/products", (req, res) => {
  const sql = `
    SELECT 
      p.product_id,
      p.product_name,
      p.product_url,
      d.product_brief_description,
      d.product_full_description,
      d.product_image_url,
      pr.starting_price,
      pr.price_range
    FROM products p
    JOIN product_description d ON p.product_id = d.product_id
    JOIN product_price pr ON p.product_id = pr.product_id
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

//  GET single product by id
app.get("/products/:pid", (req, res) => {
  const { pid } = req.params;
  const sql = `
    SELECT 
      p.product_id,
      p.product_name,
      p.product_url,
      d.product_brief_description,
      d.product_full_description,
      d.product_image_url,
      pr.starting_price,
      pr.price_range
    FROM products p
    JOIN product_description d ON p.product_id = d.product_id
    JOIN product_price pr ON p.product_id = pr.product_id
    WHERE p.product_id = ?
  `;

  db.query(sql, [pid], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]); // return single product
  });
});

//  Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
