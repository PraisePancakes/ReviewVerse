const User = require("../../Models/User");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExists = await User.findOne({ username: username });
    if (username == "") {
      return res.status(422).send({ message: "INVALID USERNAME INPUT" });
    } else if (password == "") {
      return res.status(422).send({ message: "INVALID PASSWORD INPUT" });
    } else if (!userExists) {
      return res.status(409).send({ message: "USER DOESNT EXIST!" });
    }
    const decodedPassword = bcrypt.compareSync(password, userExists.password);

    if (!decodedPassword) {
      return res.status(401).send({ message: "INVALID USERNAME OR PASSWORD" });
    }

    return res.status(200).send({ message: "Logged In!" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
