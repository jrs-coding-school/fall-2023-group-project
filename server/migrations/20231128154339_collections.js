/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('collections', function(table) {
        table.increments('id').primary()
        table.integer('userId').references('id').inTable('users').notNullable().onDelete('CASCADE')
        table.integer('cardId').references('id').inTable('yuGiOhCards').notNullable().onDelete('CASCADE')
        table.integer('quantity').defaultTo(1)
        table.boolean('isFavorite').defaultTo(false)
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('collections');
};
