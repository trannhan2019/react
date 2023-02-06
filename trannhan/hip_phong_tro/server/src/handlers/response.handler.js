const responseWithData = (res, statusCode, data) =>
  res.status(statusCode).json(data);

const error = (res) =>
  responseWithData(res, 500, {
    err: 1,
    msg: "Oops! Something worng!",
  });

const badRequest = (res, msg) =>
  responseWithData(res, 400, {
    err: 1,
    msg,
  });

const ok = (res, data) => responseWithData(res, 200, data);

const created = (res, data) => responseWithData(res, 201, data);

const unauthorize = (res) =>
  responseWithData(res, 401, {
    err: 1,
    msg: "Unathorized",
  });

const notFound = (res) =>
  responseWithData(res, 404, {
    err: 1,
    msg: "Resource not found",
  });

export default {
  error,
  badRequest,
  ok,
  created,
  unauthorize,
  notFound,
};
