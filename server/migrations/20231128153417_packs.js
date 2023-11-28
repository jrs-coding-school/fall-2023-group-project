/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('packs', (table) => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('code').unique()
        table.decimal('price', 8, 2)
      })
    };


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('packs')
};
