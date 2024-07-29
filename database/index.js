const { Client } = require("pg");

// create postgress client

const client = new Client({
  host: "127.0.0.1", // Replace with your PostgreSQL server host
  user: "laibaikram", // Replace with your PostgreSQL username
  password: "1234", // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
  database: "social_app" // Replace with your PostgreSQL database name
});

module.exports = client;
