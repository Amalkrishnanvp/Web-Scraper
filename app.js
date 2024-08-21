const express = require("express");

const app = express();
const port = 1000;

// Set view engine: Handlebars
app.set("view engine", "hbs");

// Serve static files from 'public' folder
app.use(express.static("public"));

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const indexRouter = require("./routes/index");
const dataRouter = require("./routes/data");

// Use routes
app.use("/", indexRouter);
app.use("/scrapdata", dataRouter);

// Start server
app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
