/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('guides', (table) => {
        table.increments('id').notNullable()
        table.integer('userId').notNullable().references('id').inTable('users').onDelete('CASCADE')
        table.string('name').notNullable()
        table.string('image')
        table.boolean('isFavorite').defaultTo(false)
        table.integer('views').defaultTo(0)
      })
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('guides');
};
