/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('packRatings', (table) => {
        table.increments('id').notNullable()
        table.integer('packId').notNullable().references('id').inTable('packs')
        table.integer('userId').notNullable().references('id').inTable('users')
        table.tinyint('score').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
    }; 

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('packRatings');
  
};
