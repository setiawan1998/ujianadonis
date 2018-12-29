'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.get('products', 'ProductController.index')
    Route.post('product', 'ProductController.create')

    Route.post('order', 'OrderController.create')
    Route.patch('order/:id', 'OrderController.edit')
    Route.delete('order/:id', 'OrderController.delete')


    Route.post('transaction', 'TransactionController.create')
    Route.get('transaction/:id', 'TransactionController.detail')

}).prefix('api/v1')
