const mongoose = require('mongoose')

const ProdutosSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: [true, 'Por favor, adicionar o nome do produto'],
        maxlength: [200, 'Descrição não pode ser mais de 200 caracteres']
    },
    value: {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: [true, 'Por favor inserir a descrição do produto'],
        maxlength: [500, 'Descrição não pode ultrapassar de 500 caracteres']
    },
    color: {
        type: [String],
        required: true
    },
    size: {
        type: [String],
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    valuation: {
        type: Number
    },
    sexo: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    }
})

module.exports = mongoose.models.Produtos || mongoose.model('Produtos', ProdutosSchema)