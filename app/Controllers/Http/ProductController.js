'use strict'
const modelProduct = use('App/Models/Product') 

class ProductController {
    async index({response}){
        const data = await modelProduct.all()
        return response.json(data)
    }
    async create({request, response}){
        const data_request = request.all()
        const product = new modelProduct()
        product.name = data_request.name
        product.price = data_request.price
        product.image_url = data_request.image_url
        await product.save()
        return response.json({status: true, message: 'Data Berhasil Disimpan'})
    }
}

module.exports = ProductController
