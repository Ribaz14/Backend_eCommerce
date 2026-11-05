import mongoose from 'mongoose';

const inteiro = { validator: Number.isInteger, message: '{PATH} deve ser um número inteiro'};

const schema = new mongoose.Schema(
    {
        nome: {type: String, required: true, trim: true},
        descricao: {type: String, required: true, trim: true},
        preco: {type: Number, required: true, min: 1, validate: inteiro},
        stock: {type: Number, required: true, min: 0, default: 0, validate: inteiro},
        categoria: {type: String, required: true, trim: true},
        imagem: {type: String },
        ativo: {type: Boolean, default: false},
    },
    {
        timestamps: true
    }
);

schema.index({ativo: 1, categoria: 1});

export default mongoose.model('Produto', schema);