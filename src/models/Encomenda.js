import mongoose from 'mongoose';

const linhaSchema = new mongoose.Schema(
    {
        produto: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true},
        nome: { type: String, required: true, trim: true},
        precoUnitario: { type: Number, required: true},
        quantidaede: { type: Number, required: true},

    },
    {_id: false}
)

const schema = new mongoose.Schema(
    {
        utilizador: { type: mongoose.Schema.Types.ObjectId, ref:' Utilizador', required: true},
        linhas: { type: [linhaSchema] , required: true},
        total: { type: Number, required: true},
        estado: { type: String, enum: ['pendente', 'paga', 'enviada', ' entregue', 'cancelada'], default: 'pendente'},
        morada: {
            rua: { type: String, required: true},
            codigoPostal: { type: String, required: true},
            cidade: { type: String, required: true},
        },
    },
    {timestamps: true}
);

schema.index({utilizador: 1, createdAt: -1});

export default mongoose.model('Encomenda', schema);