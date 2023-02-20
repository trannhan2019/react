const userModel = require("../models/user.model.js");
const jsonwebtoken = require("jsonwebtoken");
const responseHandler = require("../handlers/response.handler.js");
// const fs = require("fs");

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
      { expiresIn: "30s" }
    );
    const refreshToken = jsonwebtoken.sign(
      { data: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    //luu refreshToken vao db
    user.refreshToken = refreshToken;
    await user.save();
    // Lưu refresh token vào cookie
    res.cookie("refreshToken", refreshToken, {
      // path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });
    responseHandler.created(res, {
      token,
      ...user._doc,
      id: user._id,
    });
  } catch (err) {
    responseHandler.error(res);
  }
};

const refreshToken = async (req, res) => {
  try {
    // Lấy token từ cookies
    const cookie = req.cookies;
    console.log(cookie);
    // // Check xem có token hay không
    // if (!cookie && !cookie.refreshToken)
    //   return responseHandler.unauthorize(res);
    // // Check token có hợp lệ hay không
    // const rs = jsonwebtoken.verify(cookie.refreshToken, process.env.JWT_SECRET);

    // const user = await userModel.findOne({
    //   _id: rs.data,
    //   refreshToken: cookie.refreshToken,
    // });
    // console.log(user);
    // if (!user) return responseHandler.unauthorize(res);
    // responseHandler.ok(res, {
    //   token: jsonwebtoken.sign({ data: rs.data }, process.env.JWT_SECRET, {
    //     expiresIn: "30s",
    //   }),
    // });
  } catch (error) {
    console.log(error);
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
    const user = await userModel
      .findById(req.user.id)
      .select("fullName photo birthday");
    if (!user) return responseHandler.unauthorize(res);
    // if (req.file && user.photo) {
    //   // fs.unlink(`public/uploads/users/${user.photo}`, (err) => {
    //   //   if (err) throw err;
    //   // });
    //   fs.unlink(`${user.photo}`, (err) => {
    //     if (err) throw err;
    //   });
    // }
    //set new fullname and new photo
    user.fullName = req.body.fullName;
    if (req.file)
      user.photo = `${req.protocol}://${req.get("host")}/public/uploads/users/${
        req.file.filename
      }`;
    // user.photo = `${req.file.filename}`;
    user.birthday = req.body.birthday;
    await user.save();
    //responseHandler.ok(res);
    const token = jsonwebtoken.sign(
      { data: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    responseHandler.ok(res, {
      token,
      ...user._doc,
      id: user._id,
    });
  } catch {
    responseHandler.error(res);
  }
};

const getList = async (req, res) => {
  try {
    const { search, page, limit } = req.query;
    let query = {};
    if (search) query.fullName = { $regex: new RegExp(search), $options: "i" };
    const options = {
      page: +page || 1,
      limit: +limit || 5,
    };
    const userList = await userModel.paginate(query, options);
    responseHandler.ok(res, userList);
  } catch (error) {
    responseHandler.error(res);
    console.log(error.message);
  }
};

//tu get paginate ko su dung thu vien
const getList2 = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 5;
    const userList = await userModel
      .find()
      .skip(limit * page - limit)
      .limit(limit);
    responseHandler.ok(res, { docs: userList, totalDocs: userList.length });
  } catch (error) {
    responseHandler.error(res);
    console.log(error.message);
  }
};

module.exports = {
  signup,
  signin,
  getUser,
  updatePassword,
  updateInfo,
  getList,
  getList2,
  refreshToken,
};
