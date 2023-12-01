/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const {chunk} = require('../src/utility/utils.js')
const cards = require('./data/cards.json')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('yuGiOhCards').del()

  // we need to chunk the array to prevent running out of memory 
    // when inserting large datasets
  const chunkedCards = chunk(cards, 1000)
  await Promise.all(chunkedCards.map(async (element) => {
    return await knex('yuGiOhCards').insert(element)
  }))
};