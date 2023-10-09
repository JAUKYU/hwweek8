const fs = require("fs");
const pool = require("./queries.js");

const seedQuery = fs.readFileSync("src/db/seeding.sql", { encoding: "utf-8" });
pool.query(seedQuery, (error, result) => {
  if (error) {
    throw error;
  }
  console.log("Seeding Complete");
  pool.end();
});
