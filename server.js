const express = require("express");
const http = require("http");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/errorController");
const indexRouter = require("./routes/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config();

const client = require("./database/index");

client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
  })
  .catch((error) => {
    console.error("Error connecting to PostgreSQL:", error);
  });

async function initializeApp() {
  const port = process.env.PORT || 4000;
  const server = http.createServer(app);
  // server.listen(port);
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
initializeApp();

function configureApp() {
  app.use(cookieParser());
  app.use(flash());
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: "*"
    })
  );
}
configureApp();

app.use(indexRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    error: err,
    message: err.message,
    stack: err.stack
  });
});

module.exports = app;
