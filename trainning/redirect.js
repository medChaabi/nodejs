import Express from "express";

const app = Express();
const port = 3000;

app.get("/g", (req, res) => {
    res.redirect('https://google.com')
});

app.get("/f", (req, res) => {
    res.redirect('https://facebook.com')
});

app.get("/y", (req, res) => {
    res.redirect('https://youtube.com')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
