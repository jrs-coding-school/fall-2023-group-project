/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('collection', function(table) {
        table.increments('id').primary().notNullable()
        table.int('userId').references('id').inTable('users').notNullable()
        table.int('cardsId').references('id').inTable('yuGiOhCards').notNullable()
        table.int('quantity').defaultTo(1)
        table.boolean('isFavorite').defaultTo(false)
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('collection');
};
