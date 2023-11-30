require('dotenv').config()


const { findAll } = require('./service')

exports.showAll = async (req, res) => {
    try {
  
      const {
        packs,
        query
      } = req
  
      // get allUsers from the database
      const allPacks = await findAll(query)

      // console.log(allPacks)
  
      // return a response with allUsers
      return res.status(200).json({message: 'packs found!', data: allPacks.data, total: allPacks.total})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }