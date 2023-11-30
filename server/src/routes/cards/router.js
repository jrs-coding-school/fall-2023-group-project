// ** express
const { Router } = require('express')

// ** controllers
const {showAll} = require('./controller')


// create a new Router instance
const router = new Router()

// define routes

router.get('/', showAll)

// exporting router
module.exports = router
