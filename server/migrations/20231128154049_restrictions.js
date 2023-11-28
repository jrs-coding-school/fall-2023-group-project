/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('restrictions', function(table) {
        table.increments('id').primary().notNullable();
        table.int('userId').references('id').inTable('users').notNullable();
        table.int('formatId').references('id').inTable('formats').notNullable();
        table.enum('type', ['banned', 'limited', 'semi-limited'])
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('restrictions');
};
