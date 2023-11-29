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
        .then((packs) => {
          // modify the resulting array to remove the passwords
          return packs.map((packs) => {
            // add the user to the new array
            return packs
          })
        })
  
      // return a response with allUsers
      return res.status(200).json({message: 'packs found!', data: allPacks})
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }