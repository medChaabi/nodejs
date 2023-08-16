import express from "express";

app = express();

app.get("/:name", (req, res) => {
    const name = req.params.name;
    res.send("Hello World! " + name)
})

app.get("/:name/:age", (req, res) => {
    const name = req.params.name;
    const age = req.params.age;
    res.send("Hello World! " + name + " " + age)
})


app.listen(3000, () => {console.log("Server is running on port 3000")})