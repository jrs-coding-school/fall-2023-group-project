/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('yuGiOhCards', function(table) {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.text('description').notNullable()
      table.string('race')
      table.string('archetype')
      table.string('image').notNullable()
      table.decimal('price', 8, 2).notNullable()
      table.smallint('atk')
      table.smallint('def')
      table.tinyint('level')
      table.string('attribute')
    })
  }
  
  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('yuGiOhCards');
  }
