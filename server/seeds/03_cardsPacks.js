/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const {chunk} = require('../src/utility/utils.js')
const cardPacks = require('./data/cardsPacks.json')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cardsPacks').del()

  // we need to chunk the array to prevent running out of memory 
    // when inserting large datasets
  const chunkedPacks = chunk(cardPacks, 1000)
  await Promise.all(chunkedPacks.map(async (element) => {
    return await knex('cardsPacks').insert(element)
  }))

};