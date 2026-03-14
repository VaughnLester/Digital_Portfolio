const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port =  5000; // Use env PORT if provided

// Path to React build folder
const ReactBuildPath = path.join(__dirname, "../client/front_end/dist");
const indexPath = path.join(ReactBuildPath, "index.html");

// Serve all static files (JS, CSS, images) from React build
app.use(express.static(ReactBuildPath));

// Catch-all route: serve React index.html for all other paths
app.get("*", (req, res) => {
  res.sendFile(indexPath);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});