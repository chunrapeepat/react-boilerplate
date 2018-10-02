import express from "express";
import path from "path";
const app = express();

import ssr from "./ssr.js";

app.use(ssr);

app.listen(3000);
