/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('deckRating', (table) => {
        table.increments('id').notNullable()
        table.integer('deckId').notNullable().references('id').inTable('decks')
        table.tinyint('score')
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * "My name is Gustavo, but you can call me Gus" -Gus
 */
exports.down = function(knex) {
  return knex.schema.dropTable('deckRating');
};
