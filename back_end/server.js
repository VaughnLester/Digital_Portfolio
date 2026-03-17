const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router(); //eventurlaly move this to create a separte route file to neatly store all your routes
const pool = require("./database");

const app = express();
const port =  5000; // Use env PORT if provided

// SERVER CONNECTION : Path to React build folder
const ReactBuildPath = path.join(__dirname, "../client/front_end/dist");
const indexPath = path.join(ReactBuildPath, "index.html");
// Serve all static files (JS, CSS, images) from React build
app.use(express.static(ReactBuildPath));


//ROUTES : creating server api manaully: - EVENTUALLY MOVE THIS TO A SEPERATE ROUTE FILE (USING ROUTER) TO NEATLY STORE ALL YOUR ROUTES!!
app.get('/projectAPI', async (req, res)=>{ //creating a get route
  try {
    const [rows] = await pool.query("SELECT * FROM projects");
    res.json(rows); // send JSON to frontend
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

// Catch-all route: serve React index.html for all other paths, must be at the bottom 
app.use((req, res) => {
  res.sendFile(indexPath);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




 