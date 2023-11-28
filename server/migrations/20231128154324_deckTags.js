/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('deckTags', (table) => {
        table.increments('id').primary()
        table.integer('deckId').notNullable().references('id').inTable('decks').onDelete('CASCADE')
        table.string('tag')
      })
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('deckTags')
};
