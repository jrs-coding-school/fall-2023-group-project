/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cardsPacks', (table) => {
        table.increments('id').notNullable()
        table.integer('cardId').notNullable().references('id').inTable('yuGiOhCards')
        table.integer('packId').notNullable().references('id').inTable('packs')
        table.string('rarity')
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('cardsPacks');
};
