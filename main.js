import express from "express";
import path from "path";
const app = express();

import ssr from "./ssr.js";
app.get("/client.min.js", (req, res) => {
  res.sendFile(path.resolve("./src/client.min.js"));
});
app.use(ssr);
app.listen(8080);
