const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendMail = asyncHandler(async ({ email, html }) => {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"trannhan" <no-relply@trannhan.com>',
    to: email,
    subject: "Forgot password",
    html: html,
  });

  return info;
});

module.exports = sendMail;
