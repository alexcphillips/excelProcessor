const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });
import * as express from "express";
import { connect } from "../mongo/index";

const app = express();
const port = process.env.PORT || 3000;

connect();

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
