const express = require("express");
const cors = require("cors");
const db = require("./models/db");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend app!" });
});

db.sequelize.sync();
require("./routes/product.route")(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("App is listening on port 8000");
});
