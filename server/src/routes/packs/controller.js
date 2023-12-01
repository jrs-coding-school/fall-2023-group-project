require('dotenv').config()


const { findAll, findById } = require('./service')

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

  exports.showById = async (req, res) => {
    try {
      // get the id from the request
      const { 
        pack,
        id
      } = req.params
      
  
      // get user using id from the database
      const foundPack = await findById(id)
      if (!foundPack) {
        return res.status(404).json({message: 'pack not found'})
      }
  
      // return a response with the user at the specific id
      return res.status(200).json({message: 'pack found!', data: foundPack})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }