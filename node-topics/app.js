import { name, age } from "./med.js";

console.log(name);
console.log(age);

import http from "http";

const server = http.createServer((req, res) => {
  res.end("hello world");
});
server.listen(3000)
