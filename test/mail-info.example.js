// private
module.exports = {
  to: [
    'example@163.com'
  ],
  from: 'example <example@163.com>',
  smtp: {
    auth: {
      user: 'example@163.com',
      pass: 'example'
    },
    host: 'smtp.163.com',
    secureConnection: true,
    port: 465
  },
  attachments: [{
    filePath: __dirname + "/i-love-you.txt",
  }, {
    fileName: "i-love-you.jpg",
    filePath: __dirname + "/i-love-you.jpg",
  }]
}