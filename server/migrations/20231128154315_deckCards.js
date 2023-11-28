/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('deckCards', (table) => {
        table.increments('id').primary()
        table.integer('cardId').notNullable().references('id').inTable('yuGiOhCards').onDelete('CASCADE')
        table.integer('deckId').notNullable().references('id').inTable('decks').onDelete('CASCADE')
      })
    };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('deckCards');
};
