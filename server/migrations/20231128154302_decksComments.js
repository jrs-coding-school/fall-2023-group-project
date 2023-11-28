/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('deckComments', (table) => {
        table.increments('id').notNullable()
        table.integer('deckId').notNullable().references('id').inTable('decks')
        table.integer('userId').notNullable().references('id').inTable('users')
        table.string('comments').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('deckComments')
};
