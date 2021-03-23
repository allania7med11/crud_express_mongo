const express = require("express");
const dotenv = require("dotenv");
if (process.env.NODE_ENV === "production") {
  dotenv.config();
} else {
  dotenv.config({ path: ".env.dev" });
}
require("dotenv").config();
const dbConnection = require("./db");
dbConnection();
const app = express();
app.use(express.json());
const routes = require("./routes");
app.use("/api", routes);
let domain = process.env.Domain || "http://localhost";
let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listen to ${domain}:${port}/`);
});
