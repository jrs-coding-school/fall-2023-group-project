exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      username: 'nigel',
      email: 'nigel@email.com',
      password: 'hunter2'
    },
  ])
  // Correct the incrementing id to prevent conflict
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 2')
}