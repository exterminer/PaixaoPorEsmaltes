const scheduleModel = require("../models/Scheduling");

const scheduling = async (req, res) => {
  const scheduleData = req.body.scheduleData;
  const scheduleTime = req.body.scheduleTime;
  const typeOfService = req.body.typeOfService;
  const timeWasted = req.body.timeWasted;
  const name = req.body.name;
  const phone = req.body.phone;

  console.log(scheduleData)
  try {
    await scheduleModel.create({
      scheduleData,
      scheduleTime,
      typeOfService,
      timeWasted,
      name,
      phone,
    });
    res
      .status(200)
      .json({ message: "Horario marcado com sucesso", scheduling });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { scheduling };
