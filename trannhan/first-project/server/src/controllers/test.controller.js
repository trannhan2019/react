const userModel = require("../models/user.model");
const data = require("../utils/users.json");

const onTest = (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    return res.status(500).json("Loi", error);
  }
};

const fetchUser = async (req, res) => {
  try {
    if (!data.users) return res.json("no users");
    await data.users.map(async (u) => {
      let user = new userModel();
      user.fullName = `${u.firstName} ${u.lastName}`;
      user.email = u.email;
      user.birthday = u.birthDate;
      user.photo = u.image;
      await user.setPassword("123456789");
      await user.save();
    });
    res.json("success");
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = { onTest, fetchUser };
