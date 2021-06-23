const nodemailer = require('nodemailer')
const pug = require('pug')
const juice = require('juice')
const { htmlToText } = require('html-to-text')
const util = require('util')
const config = require('../config/email')

let transport = nodemailer.createTransport(config)

const generateHtml = (file, options = {}) => {
  const html = pug.renderFile(
    `${__dirname}/../views/emails/${file}.pug`,
    options
  )
  return juice(html)
}

const sendEmail = options => {
  const html = generateHtml(options.file, options)
  const text = htmlToText(html)
  const mailOptions = {
    from: 'UpTask <suport@uptask.com>',
    to: options.user.email,
    subject: options.subject,
    text,
    html
  }
  const sendEmails = util.promisify(transport.sendMail, transport)
  return sendEmails.call(transport, mailOptions)
}

module.exports = { sendEmail }
