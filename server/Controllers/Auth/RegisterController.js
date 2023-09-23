const User = require("../../Models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
const ADMIN_UNAME = process.env.ADMIN_UNAME;

module.exports = async (req, res) => {
  const { username, password } = req.body;
  const saltRounds = 10;

  try {
    const userExists = await User.findOne({ username: username });
    if (username == "") {
      return res.status(422).send({ message: "INVALID USERNAME INPUT" });
    } else if (password == "") {
      return res.status(422).send({ message: "INVALID PASSWORD INPUT" });
    } else if (userExists) {
      return res.status(409).send({ message: "USER ALREADY EXISTS!" });
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
      isAdmin: username === ADMIN_UNAME ? true : false,
    });

    await newUser.save();
    res.status(200).send({ message: "Registered!" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
