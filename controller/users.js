const mail = require('../helpers/mail')

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @description
 */
exports.getUsers = async (req, res, next) => {
  const users = [
    {
      id: 1,
      name: 'Adebayo',
      email: 'obafunsoadebayo17@gmail.com',
    },
    {
      id: 2,
      name: 'Ridwan',
      email: 'obafunsoridwan17@gmail.com',
    },
    {
      id: 3,
      name: 'Olamide',
      email: 'obafunsoadebayo17@gmail.com',
    },
    {
      id: 4,
      name: '<b>Shayo</b>',
      email: 'obafunsoadebayo17@gmail.com',
    },
  ]

  res.render('pages/users', { users })
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @description
 */
exports.createUser = async (req, res, next) => {
  try {
    // console.log(req.body)

    // After registering user
    let user = {
      name: 'Obafunso Adebayo',
      email: 'elon@spaceX.com',
    }

    let result = await mail.send({
      template: 'welcome',
      message: {
        to: user.email,
      },
      locals: user,
    })

    if (result) {
      console.log(`Message send successfully`)
    }
  } catch (error) {
    console.log(error)
  }
}
