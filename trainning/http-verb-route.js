import express from "express";

app = express();

// Get request
app.get("/http", (req, res) => {
  res.send("GET request to route http.");
});

// Post request
app.post("/http", (req, res) => {
  res.send("POST request to route http.");
});

// Put request
app.put("/http", (req, res) => {
  res.send("PUT request to route http.");
});

// Delete request
app.delete("/http", (req, res) => {
  res.send("DELETE request to route http.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
