const app = require("./app");
const sequelize = require("./db/conn");
const user = require("./models/employee");
const Scheduling = require("./models/Scheduling");
require("dotenv").config();
const PORT = process.env.PORT;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
