const users = require('./data/users.json')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert(users);
  await knex.raw( `ALTER SEQUENCE users_id_seq RESTART WITH ${users.length + 1}`)

};
