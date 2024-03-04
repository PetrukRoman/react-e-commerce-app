import sql from "better-sqlite3";

const db = sql("products.db");

let DUMMY_PRODUCTS = [
  {
    title: "Modern Fabric Sofa",
    slug: "modern-fabric-sofa",
    imageUrl: "images/modern-sofa.jpg",
    description: "3-seat sofa, Gunnared beige",
    isNew: 1,
    discount: "",
    timestamp: new Date("August 20, 2022 14:15:30").toISOString(),
  },
  {
    title: "KIVIK",
    slug: "kivik-sofa",
    imageUrl: "images/kivik-1.jpg",
    description: "3-seat sofa, Tibbleby beige/grey",
    isNew: 0,
    discount: "-30%",
    timestamp: new Date("February 20, 2021 11:30:30").toISOString(),
  },
  {
    title: "LANDSKRONA",
    slug: "landskrona-3-seat",
    imageUrl: "images/landskrona-1.jpg",
    description: "3-seat sofa, Gunnared dark grey/wood",
    isNew: 1,
    discount: "",
    timestamp: new Date("October 21, 2019 14:15:30").toISOString(),
  },
  {
    title: "OSKARSHAMN",
    slug: "oskarshamn-chair",
    imageUrl: "images/chair.jpg",
    description: "Wing chair, Tibbleby beige/grey",
    isNew: 0,
    discount: "-15%",
    timestamp: new Date().toISOString(),
  },
];

for (let index = 0; index < 20; index++) {
  DUMMY_PRODUCTS.push({
    title: `TEST-${index}`,
    slug: `test-${index}`,
    imageUrl: "images/chair.jpg",
    description: "test test test test test test test",
    isNew: 1,
    discount: "",
    timestamp: new Date().toISOString(),
  });
}
let images = [
  {
    product_id: 1,
    imageUrl: "images/modern-sofa-2.jpg",
  },
  {
    product_id: 1,
    imageUrl: "images/modern-sofa-3.jpg",
  },

  {
    product_id: 2,
    imageUrl: "images/kivik-2.jpg",
  },
  {
    product_id: 2,
    imageUrl: "images/kivik-3.jpg",
  },
  {
    product_id: 3,
    imageUrl: "images/landskrona-2/jpg",
  },
  {
    product_id: 3,
    imageUrl: "images/landskrona-3/jpg",
  },
  {
    product_id: 4,
    imageUrl: "images/chair-2.jpg",
  },
  {
    product_id: 4,
    imageUrl: "images/chair-3.jpg",
  },
];

let prices = [
  {
    product_id: 1,
    currentPrice: 100000,
    prevPrice: "",
  },
  {
    product_id: 2,
    currentPrice: 49000,
    prevPrice: "70000",
  },
  {
    product_id: 3,
    currentPrice: 80000,
    prevPrice: "",
  },
  {
    product_id: 4,
    currentPrice: 17000,
    prevPrice: "20000",
  },
];
for (let index = 0; index < 20; index++) {
  prices.push({
    product_id: 5 + index,
    currentPrice: (index + 1) * 100,
    prevPrice: "",
  });
}

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS products (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL,
       slug TEXT NOT NULL UNIQUE,
       imageUrl TEXT NOT NULL,
       description TEXT NOT NULL,
       isNew INTEGER NOT NULL,
       discount TEXT,
       timestamp  TEXT
    )
`
).run();

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS prices (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       product_id  INTEGER NOT NULL  UNIQUE REFERENCES products,
       currentPrice INTEGER NOT NULL,
       prevPrice TEXT 
    )
`
).run();

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS images (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       product_id INTEGER NOT NULL REFERENCES products,
       imageUrl TEXT NOT NULL
     )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO products VALUES (
         null,
         @title,
         @slug,
         @imageUrl,
         @description,
         @isNew,
         @discount,
         @timestamp
      )
   `);
  const stmt1 = db.prepare(`
   INSERT INTO images VALUES (
      null,
      @product_id,
      @imageUrl
     
   )
`);
  const stmt2 = db.prepare(`
   INSERT INTO prices VALUES (
      null,
      @product_id,
      @currentPrice,
      @prevPrice
     
   )
`);

  for (const product of DUMMY_PRODUCTS) {
    stmt.run(product);
  }

  for (const image of images) {
    stmt1.run(image);
  }
  for (const price of prices) {
    stmt2.run(price);
  }
}

initData();
