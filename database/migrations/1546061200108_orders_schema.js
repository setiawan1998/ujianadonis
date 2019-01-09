'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.integer('product_id').notNullable().unsigned().references('id').inTable('products')
      table.integer('qty').notNullable()
      table.integer('price').notNullable()
      table.integer('transaction_id').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrdersSchema
