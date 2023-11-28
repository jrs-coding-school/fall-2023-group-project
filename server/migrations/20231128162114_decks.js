/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('decks', function(table) {
        table.increments('id').primary().notNullable()
        table.int('userId').references('id').inTable('users').notNullable()
        table.int('formatId').references('id').inTable('formats').notNullable()
        table.string('name')
        table.string('image')
        table.boolean('isFavorite').defaultTo(false)
        table.text('description')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('decks');
};
