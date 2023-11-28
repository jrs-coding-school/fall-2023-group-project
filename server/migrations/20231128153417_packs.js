/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('packs', (table) => {
        table.increments('id').notNullable()
        table.string('name').notNullable()
        table.string('code').unique()
        table.decimal('price', 8, 2).unique()
        table.timestamps('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
    };


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('packs')
};
