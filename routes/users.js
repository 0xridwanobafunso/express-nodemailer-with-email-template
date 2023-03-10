const express = require('express')
const { createUser, getUsers } = require('../controller/users')

const router = express.Router()

router.route('/').get(getUsers).post(createUser)

module.exports = router
