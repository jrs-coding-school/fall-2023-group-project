/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('restrictions', function(table) {
        table.increments('id').primary()
        table.integer('cardId').references('id').inTable('yuGiOhCards').notNullable()
        table.integer('formatId').references('id').inTable('formats').notNullable()
        table.enum('type', ['banned', 'limited', 'semi-limited'])
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('restrictions');
};
