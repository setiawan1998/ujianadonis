'use strict'
const modelTransaction = use('App/Models/Transaction') 

class TransactionController {
    async create({request, response}){
        const data_request = request.all()
        const transaction = new modelTransaction()
        transaction.order_id = data_request.order_id
        transaction.total = data_request.total
        await transaction.save()
        return response.json({status: true, message: 'Data Berhasil Disimpan'})
    }
    async detail({params, response}){
        const id = params.id
        const transaction = await modelTransaction.findBy('id', id)
        if(!transaction){
            return response.json({status:false, message: "Id Not Found"})
        }else{
            return response.json(transaction)
        }
    }
}

module.exports = TransactionController
