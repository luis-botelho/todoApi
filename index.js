if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const port = 3000;
const Connection = require("./db/db");

const dbUrl = process.env.DB_URL;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbData = process.env.DB_DATA;
Connection(dbUrl, dbUser, dbPassword, dbData);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Api funcinando</h1>");
});

const taskRoutes = require("./routers/taskRoutes");
app.use(taskRoutes);

app.listen(process.env.PORT || port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
