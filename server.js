const express = require("express");
const cors = require("cors");
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
if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

app.use(express.json());
app.use((req,res,next) => {
  next()
})
const routes = require("./routes");
app.use("/api", routes);
let domain = process.env.Domain || "http://localhost";
let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listen to ${domain}:${port}/`);
});
