/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('deckCards', (table) => {
        table.increments('id').notNullable()
        table.integer('cardId').notNullable().references('id').inTable('yuGiOhCards')
        table.integer('deckId').notNullable().references('id').inTable('decks')
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
    };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('deckCards');
};
