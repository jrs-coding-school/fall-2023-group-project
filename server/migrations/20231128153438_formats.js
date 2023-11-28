/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('formats', function(table) {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.text('description')
        table.integer('minCards')
        table.integer('maxCards')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('formats');
};
