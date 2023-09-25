const User = require("../../Models/User");

module.exports = async (req, res) => {
  const id = req.id;
  try {
    const getUser = await User.findById(id, "-password");
    return res.status(200).send({ message: "Found User! ", user: getUser });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error! " });
  }
};
