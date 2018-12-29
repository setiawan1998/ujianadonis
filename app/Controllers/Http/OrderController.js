'use strict'
const modelOrder = use('App/Models/Order') 

class OrderController {
    async create({request, response}){
        const data_request = request.all()
        const order = new modelOrder()
        order.product_id = data_request.product_id
        order.qty = data_request.qty
        order.price = data_request.price
        await order.save()
        return response.json({status: true, message: 'Data Berhasil Disimpan'})
    }
    async edit({params, request, response}){
        const id = params.id
        const data_request = request.all()
        const order = await modelOrder.findBy('id', id)
        if(!order){
            return response.json({status:false, message: "Id Not Found"})
        }else{
            order.product_id = data_request.product_id
            order.qty = data_request.qty
            order.price = data_request.price
            await order.save()
            return response.json({status: true, message: 'Data Berhasil Diedit'})
        }
    }
    async delete({params, response}){
        const id = params.id
        const order = await modelOrder.findBy('id', id)
        if(!order){
            return response.json({status:false, message: "Id Not Found"})
        }else{
            await order.delete()
            return response.json({status: true, message: 'Data Berhasil Dihapus'})
        }
    }
}

module.exports = OrderController
