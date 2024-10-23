const UserModel = require("../models/users.model");
const bcrypt = require("bcrypt");

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = UserModel.findOne({ email: email });

    if (user) {
      const isPassWordMatched = await bcrypt.compare(password, user.password);
      if (isPassWordMatched) {
        res.status(201).json({
          success: true,
          message: "Password Matched!",
        });
      } else {
        res.status(500).json({
          success: true,
          message: "Password Not Matched!",
        });
      }

      res.status(201).json({
        success: true,
        message: "You are signed in",
      });
    } else {
      res.status(500).json({
        success: false,
        message: `User Not Exist Server error`,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `${err}, Server error`,
    });
  }
};

module.exports = signin;
