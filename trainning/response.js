import express from "express";

const app = express();

// Response methods
// res.send()
// res.set()
// res.json()
// res.redirect()
// res.status()

// res.send()
// automatically set Content-Type, authomatically close the connection
app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("Hello World!");
});

  
app.listen(3000, () => {
  console.log("Example app listening on port localhost:3000!");
});
