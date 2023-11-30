const { findAll } = require('./service')

exports.showAll = async (req, res) => {
  try {

    const {
      query
    } = req

    // get all cards from the database
    const allCards = await findAll(query)

    // return a response with allUsers
    return res.status(200).json({message: 'users found!', data: allCards.data, total: allCards.total})
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: 'Internal Server Error'})
  }
}