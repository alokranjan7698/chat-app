const express = require("express");
const connectDB = require("./config/db");
const chats = require("./data/data");
const doteenv = require("dotenv");
const { urlencoded, json } = require("express");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

doteenv.config();
connectDB();
const app = express();
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, console.log("Server listening on port 5000"));
