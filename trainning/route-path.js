import express from "express";

const app = express();

// string (route)
app.get("/route", (req, res) =>
  res.send(" '/route'=> this is the string route.")
);

// string expresion (route)
app.get("/rou?e", (req, res) =>
  res.send("'/rou?e'=> you see this because the route correct.")
);

// regex (route)
app.get(/a/, (req, res) =>
  res.send("'/regex'=> you see this because the route have char a.")
);

app.listen(3000, () => {
  console.log("Example app listening on port localhost:3000!");
});
