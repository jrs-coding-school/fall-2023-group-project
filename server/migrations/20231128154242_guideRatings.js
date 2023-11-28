/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('guideRating', (table) => {
        table.increments('id').notNullable()
        table.integer('guideId').notNullable().references('id').inTable('guides')
        table.tinyint('score')
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('guideRating');
};
