const User = require("../Models/User");

exports.CreateUser = async (req, res) => {
  const reqBody = req.body;
  try {
    const result = await User.create(reqBody);
    if (result) {
      res.status(201).json({ status: "success", data: result });
    } else {
      res.status(400).json({ status: "fail", data: "User not create ." });
    }
  } catch (e) {
    res.status(401).json({ status: "fail", data: e });
  }
};
