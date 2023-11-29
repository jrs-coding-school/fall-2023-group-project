const { Router } = require('express')

const router = new Router()

const {showAll} = require('./controller')

router.get('/', showAll)

module.exports = router