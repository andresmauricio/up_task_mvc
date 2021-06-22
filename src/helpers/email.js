const nodemailer = require('nodemailer')
const pug = require('pug')
const juice = require('juice')
const htmlToText = require('html-to-text')
const util = require('util')
const config = require('../config/email')

let transport = nodemailer.createTransport(config)

transport.sendMail({
  from: 'UpTask <suport@uptask.com>', // sender address
  to: 'qhb2l7ienk@buy-blog.com', // list of receivers
  subject: 'Hello ', // Subject line
  text: 'Password Reset', // plain text body
  html: '<b>Hello world</b>' // html body
})
