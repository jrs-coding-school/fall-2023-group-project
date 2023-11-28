/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('deckComments', (table) => {
        table.increments('id').primary()
        table.integer('deckId').notNullable().references('id').inTable('decks').onDelete('CASCADE')
        table.integer('userId').notNullable().references('id').inTable('users').onDelete('CASCADE')
        table.text('comments').notNullable()
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('deckComments')
};
