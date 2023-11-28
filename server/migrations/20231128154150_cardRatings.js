/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cardRating', (table) => {
        table.increments('id').notNullable()
        table.integer('cardId').notNullable().references('id').inTable('yuGiOhCards')
        table.integer('userId').notNullable().references('id').inTable('users')
        table.tinyint('score')
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('cardRating');
};
