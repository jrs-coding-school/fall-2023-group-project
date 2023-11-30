const knex = require('../../knex.js')

exports.findAll = async ({page = 0, limit}) => {
    const data = await knex('packs')
      .select("*")
      .modify((queryBuilder) => {
        // conditionally add pagination only if a limit is set
        if (limit) {
          const offset = (page - 1) * limit // calculate the starting point
          queryBuilder.offset(offset).limit(limit) 
        }
      })

    const total = await knex('packs').count('id')
      .then((result) => {
        return result[0].count
      })
    // console.log(total)
    const results = {total, data}
    return results
  }