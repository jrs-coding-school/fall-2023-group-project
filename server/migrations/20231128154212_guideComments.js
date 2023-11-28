/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('guideComments', (table) => {
        table.increments('id').primary()
        table.integer('guideId').notNullable().references('id').inTable('guides').onDelete('CASCADE')
        table.integer('userId').notNullable().references('id').inTable('users').onDelete('CASCADE')
        table.text('comment').notNullable()
      })
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('guideComments');
};
