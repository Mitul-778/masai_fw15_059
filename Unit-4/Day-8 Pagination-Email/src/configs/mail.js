const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "f25dfc5b6a4f40", // generated ethereal user
    pass: "197bf7af303213", // generated ethereal password
  },
});