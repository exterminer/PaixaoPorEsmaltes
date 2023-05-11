const secret = require("../controllers/employeeControllers");

async function checkEmployeeToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res.status(401).json({ message: "Acesso negado" });
  }
  console.log(secret)
  try {
    jwt.verify(authHeader, secret);
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalido" });
  }
}

module.exports = { checkEmployeeToken };
