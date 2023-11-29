/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary()
        table.string('username').notNullable()
        table.string('email').unique().notNullable()
        table.string('password').notNullable()
        table.text('bio')
        table.enum('role', ['admin', 'user']).defaultTo('user').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
