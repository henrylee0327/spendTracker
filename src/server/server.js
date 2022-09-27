const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;
const routesMiddleware = require("./routes");

app.use(express.json());
app.use(cors());

app.use(routesMiddleware);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
