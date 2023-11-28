/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('guideRatings', (table) => {
        table.increments('id').notNullable()
        table.integer('guideId').notNullable().references('id').inTable('guides').onDelete('CASCADE')
        table.integer('userId').notNullable().references('id').inTable('users').onDelete('CASCADE')
        table.tinyint('score')
      })
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('guideRatings');
};
