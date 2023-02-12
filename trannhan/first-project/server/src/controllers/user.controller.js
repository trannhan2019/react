import userService from "../services/user.service.js";

const signup = async (req, res) => {
  await userService.signup(req, res);
};

const signin = async (req, res) => {
  await userService.signin(req, res);
};

export default { signup, signin };
