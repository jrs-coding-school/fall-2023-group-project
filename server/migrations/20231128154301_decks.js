/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('decks', function(table) {
        table.increments('id').primary()
        table.integer('userId').references('id').inTable('users').onDelete('CASCADE').notNullable()
        table.integer('formatId').references('id').inTable('formats').onDelete('CASCADE').notNullable()
        table.string('name').notNullable()
        table.string('image')
        table.boolean('isFavorite').defaultTo(false)
        table.text('description')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('decks');
};
