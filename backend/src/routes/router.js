const express = require("express");
const router = express.Router();
const employee = require("../controllers/employeeControllers");
const employeeMiddlewares = require("../middlewares/employees")
const admUser = require("../controllers/admControlers");
const scheduleUser = require("../controllers/SchedulingControllers");

//Rotas de Funcionarios
router.post("/employee/register", employee.employeeRegister);
router.post("/employee/login", employee.employeeLogin);

//Rotas de funcionarios com TOKEN 
router.get("/employee/:id",employee.checkEmployeeToken,employee.getInfosUser )
router.post("/employee/clientregister",employee.checkEmployeeToken, employee.clientRegister)


router.get("/adm", admUser.search);
router.post("/adm/createuser", admUser.createdUser);
router.delete("/adm/deleteuser/:id", admUser.deletedUser);
router.put("/adm/createuser/:id", admUser.updatedUser);
router.get("/adm/:id", admUser.searchedSpecif);
router.post("/adm/login", admUser.loginUser);

router.post("/user/schedule", scheduleUser.scheduling);
router.get("/user/:id", admUser.logedUser);
module.exports = router;
