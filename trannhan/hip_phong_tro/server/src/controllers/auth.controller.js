import responseHandler from "../handlers/response.handler";
const register = (req, res) => {
  const isChecked = false;
  if (isChecked) return responseHandler.created(res, { user: "Tran Van Test" });
  else {
    return responseHandler.badRequest(res, "Loi ko dung request");
  }
};

export default {
  register,
};
