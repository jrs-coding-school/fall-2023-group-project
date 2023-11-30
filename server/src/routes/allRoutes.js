const { Router } = require('express')

// import routes
const root = require('./root/router')
const users = require('./users/router')
const cards = require('./cards/router')
const packs = require('./packs/router')

// create a new Router instance
const allRouters = new Router()

// create base routes
allRouters.use('/', root)
allRouters.use('/users', users)
allRouters.use('/cards', cards)
allRouters.use('/packs', packs)

// exporting router
module.exports = allRouters