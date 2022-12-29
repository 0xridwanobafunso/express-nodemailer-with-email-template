const Mail = require('email-templates')
const pkgDir = require('pkg-dir')

// npm i email-templates ejs pkg-dir to work with email template
const mail = new Mail({
  transport: {
    host: 'smtp.mailtrap.io',
    port: '465',
    secure: false,
    auth: {
      user: '326d0dd5a7e872',
      pass: '81e33a764027f2',
    },
  },
  send: true,
  message: {
    from: '<no-reply>@example.com',
  },
  views: {
    root: pkgDir.sync(__dirname) + '/mails',
    options: {
      extension: 'ejs',
    },
  },
  // Default true
  preview: false,
})

module.exports = mail
