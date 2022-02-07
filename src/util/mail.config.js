import nodemailer from 'nodemailer'

// create reusable transporter object using the default SMTP transport
export const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'nels.yost71@ethereal.email', // generated ethereal user
    pass: 'wMvBbSXGhrV12cT948', // generated ethereal password
  },
});

export const mail = {
    from: '"nels.yost" <nels.yost71@ethereal.email>', // sender address
    to: "lofarobruno@gmail.com", // list of receivers
    subject: "signup ✔", // Subject line
    text: "a signup has just been made", // plain text body
}
