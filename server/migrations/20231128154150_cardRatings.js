/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cardRating', (table) => {
        table.increments('id').primary()
        table.integer('cardId')
          .references('id')
          .inTable('yuGiOhCards')
          .onDelete('CASCADE')
          .notNullable()
        table.integer('userId')
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .notNullable()
        table.tinyint('score')
      })
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('cardRating');
};
