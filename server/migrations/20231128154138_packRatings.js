/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('packRatings', (table) => {
        table.increments('id').primary()
        table.integer('packId')
          .references('id')
          .inTable('packs')
          .onDelete('CASCADE')
          .notNullable()
        table.integer('userId')
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .notNullable()
        table.tinyint('score').notNullable()
      })
    }; 

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('packRatings');
  
};
