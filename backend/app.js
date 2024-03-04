import sql from "better-sqlite3";
import bodyParser from "body-parser";
import express from "express";

const app = express();
const db = sql("./data/products.db");

app.use(bodyParser.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/products", async (req, res) => {
  const limit = req.query.limit || 16;
  const page = req.query.page || 0;
  const offset = page * limit;

  let products;

  if (!req.query.sortBy) {
    products = db
      .prepare("SELECT products.* , prices.currentPrice, prices.prevPrice FROM products JOIN prices ON products.id = prices.product_id   LIMIT ? , ?")
      .all([offset, limit]);
  }
  if (req.query.sortBy === "new") {
    products = db
      .prepare(
        "SELECT products.* , prices.currentPrice, prices.prevPrice FROM products JOIN prices ON products.id = prices.product_id  ORDER BY timestamp  DESC LIMIT ? , ?"
      )
      .all([offset, limit]);
  }
  if (req.query.sortBy === "ASC") {
    products = db
      .prepare(
        "SELECT products.* , prices.currentPrice, prices.prevPrice FROM products JOIN prices ON products.id = prices.product_id  ORDER BY currentPrice ASC LIMIT ? , ?"
      )
      .all([offset, limit]);
  }
  if (req.query.sortBy === "DESC") {
    products = db
      .prepare(
        "SELECT products.* , prices.currentPrice, prices.prevPrice FROM products JOIN prices ON products.id = prices.product_id  ORDER BY currentPrice DESC LIMIT ? , ?"
      )
      .all([offset, limit]);
  }
  const productsCount = db.prepare("SELECT COUNT(id) as count FROM products ").get();
  console.log(offset, limit);
  setTimeout(() => {
    res.status(200).json({
      products,
      productsCount: productsCount.count,
    });
  }, 2000);
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3000);
