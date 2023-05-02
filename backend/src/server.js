const app = require("./app");
const sequelize = require("./db/conn");
const user = require("./models/user")
const Scheduling = require("./models/Scheduling")

sequelize.sync().then(() => {
  app.listen(3000);
}).catch((err) =>console.log(err))
