if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000" || "https://reactblue.herokuapp.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const Connection = require("./db/db");

const dbUrl = process.env.DB_URL;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbData = process.env.DB_DATA;

Connection(dbUrl, dbUser, dbPassword, dbData);
const port = 3050;

app.get("/", (req, res) => {
  res.send("<h1>Working...</h1>");
});

const taskRoutes = require("./routers/taskRoutes");
app.use(taskRoutes);

app.listen(process.env.PORT || port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
