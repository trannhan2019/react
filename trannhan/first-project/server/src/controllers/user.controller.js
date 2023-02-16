import userModel from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";
import { unlink } from "fs";

const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const checkUser = await userModel.findOne({ email });
    if (checkUser)
      return responseHandler.badrequest(res, "Account already used");
    const user = new userModel();
    user.fullName = fullName;
    user.email = email;
    await user.setPassword(password);
    await user.save();

    const token = jsonwebtoken.sign(
      { data: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    responseHandler.created(res, {
      token,
      ...user._doc,
      id: user._id,
    });
  } catch {
    return responseHandler.error(res);
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return responseHandler.badrequest(res, "Wrong User or Password");
    if (!(await user.validPassword(password)))
      return responseHandler.badrequest(res, "Wrong User or password");
    const token = jsonwebtoken.sign(
      { data: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    responseHandler.created(res, {
      token,
      ...user._doc,
      id: user._id,
    });
  } catch (err) {
    responseHandler.error(res);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select("-password");
    if (!user) return responseHandler.notfound(res);
    responseHandler.ok(res, user);
  } catch {
    responseHandler.error(res);
  }
};

const updatePassword = async (req, res) => {
  try {
    const { password, newPassword } = req.body;

    const user = await userModel.findById(req.user.id).select("password _id");
    if (!user) return responseHandler.unauthorize(res);

    if (!(await user.validPassword(password)))
      return responseHandler.badrequest(res, "Wrong password");

    await user.setPassword(newPassword);
    await user.save();

    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};

const updateInfo = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id).select("fullName photo");
    if (!user) return responseHandler.unauthorize(res);
    if (req.file && user.photo) {
      unlink(`public/uploads/users/${user.photo}`, (err) => {
        if (err) throw err;
      });
    }
    //set new fullname and new photo
    user.fullName = req.body.fullName;
    if (req.file)
      // user.photo = `${req.protocol}://${req.get("host")}/${req.file.filename}`;
      user.photo = `${req.file.filename}`;

    await user.save();
    //responseHandler.ok(res);
    const token = jsonwebtoken.sign(
      { data: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    responseHandler.created(res, {
      token,
      ...user._doc,
      id: user._id,
    });
  } catch {
    responseHandler.error(res);
  }
};

export default { signup, signin, getUser, updatePassword, updateInfo };
