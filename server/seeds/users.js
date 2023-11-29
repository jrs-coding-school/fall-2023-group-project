const users = require('./data/users.json')
const bcrypt = require('bcrypt')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // take passwords and turn them into password hashes using bcrypt
    // this allows you to log in as the seeded user for testing
    // promise.all is so that we can await the bcrypt hashes.
  const usersWithHashes = await Promise.all(users.map(async (user) => {
    // get the password
    const password = user.password
    // Hash the password with 10 rounds of salt
    const hash = await bcrypt.hash(password, 10)

    // copy the user object to return
      // replace "password" key with the hashed password
    const newUser = {...user, password: hash}

    // return the object
    return newUser
  }))
  await knex('users').insert(usersWithHashes);
  await knex.raw( `ALTER SEQUENCE users_id_seq RESTART WITH ${users.length + 1}`)

};