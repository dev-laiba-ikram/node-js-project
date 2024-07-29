const express = require("express");
const app = express();
const router = express.Router();
const REACT_APP_API_VERSION = process.env.REACT_APP_API_VERSION || "/api/v1";

const routes = [require("./user.route")];

app.use(express.json());

routes.forEach((route) => {
  router.use(`${REACT_APP_API_VERSION}`, route);
});
router.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end('<h1 style="text-align:center">Welcome to InvoCom ChatBot</h1>');
});

module.exports = router;
