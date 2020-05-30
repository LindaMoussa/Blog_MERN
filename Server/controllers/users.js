const Jwt = require("jsonwebtoken");
const User = require("../model/user");

const userController = {};

/**
 * Signup Controller
 */

userController.register = async (req, res, next) => {
  const {
    name,
    email,
    gender,
    password
  } = req.body;
  const newUser = new User({
    name,
    email,
    gender,
    password,
  });

  try {
    const user = await newUser.save();
    return res.send({
      user,
    });
  } catch (e) {
    if (e.code === 11000 && e.name === "MongoError") {
      var error = new Error(`Email address ${newUser.email} is already taken`);
    }
    next(e);
  }
};
userController.login = async (req, res, next) => {
  //email & pass from request
  const {
    email,
    password
  } = req.body;

  try {
    // check
    const user = await User.findOne({
      email,
    });
    if (!user) {
      const err = new Error(`This email ${email} is not found`);
      err.status = 401;
      next(err);
    }

    user.isPasswordMatch(password, user.password, (err, matched) => {
      if (matched) {
        // return res.send({ message: "Matched" });
        const secret = "Secret";
        const expire = '7d';

        const token = Jwt.sign({
          _id: user._id
        }, secret, {
          expiresIn: expire
        });
        res.send({
          token
        });
      }
      res.status(401).send({
        error: "Invalid username or password",
      });
    });
  } catch (e) {
    next(e);
  }
};
module.exports = userController;