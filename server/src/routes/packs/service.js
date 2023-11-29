const knex = require('../../knex.js')

exports.findAll = async ({page = 0, limit}) => {
    const results = await knex('packs')
      .select("*")
      .modify((queryBuilder) => {
        // conditionally add pagination only if a limit is set
        if (limit) {
          const offset = (page - 1) * limit // calculate the starting point
          queryBuilder.offset(offset).limit(limit) 
        }
      })
  
    return results
  }