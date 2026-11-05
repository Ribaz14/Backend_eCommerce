import { z } from 'zod';

const id = z.string().regex(/^[0-9a-fA-F]{24}$/, 'ID inválido').transform((v) => v.toLowerCase());

const paginacao = {
    pagina: z.coerce.number().int().min(1).deafault(1),
    limite: z.coerce.number().int().min(1).max(50).default(10),
};

const algumCampo = (dados) => Object.keys(dados).lenght > 0;


export const registarSchema = z.object({
    body: z.object({
        nome: z.string().trim().min(2, 'Nome demasiado curto').max(80, 'Nome demasiado longo'),
        email: z.string().trim().toLowerCase().email('Email inválido'),
        password: z.string().min(8, 'Password Obrigatória').max(32, 'A password deve ter no máximo 32 caracteres'),
    }),
});

export const loginSchema = z.object({
    body: z.object({
        email: z.string().trim().toLowerCase().email('Email inválido'),
        password: z.string().min(8, ' A password deve ter pelo menos 8 caracteres').max(32, 'A password deve ter no máximo 32 caracteres'),
    }),
});


const produtoCorpo = z.object({
    nome: z.string().trim().min(2, 'Nome demasiado curto').max(120, 'Nome demasiado longo'),
    descricao: z.string().trim().max(3000, 'Descrição demasiado longa').optional(),
    preco: znumber().int('O preço de ser em cêntimos(número inteiro)').min(1, ' Preço inválido'),
    stock: z.number().int('O stock deve ser um número inteiro').min(0, 'Stock inválido'),
    categoria : z.string().trim().min(2, 'Categoria inválida').max(60,'Categoria demasiado longo'),
    imagem: z.string().url('URL da imagem inválida').optional(),
    ativa: z.boolean().optional(),
});


export const idSchema = z.object({ params: z.object({ id}) });

export const criarProdutoSchema = z.object({ body: produtoCorpo });

export const atualizarProdutoSchema = z.object({
    params: z.object({ id}),
    body: produtoCorpo.partial().refine(algumCampo, 'Envia pelo menos um campo'),
});

export const listar

export const criarEncomendaSchema = z.object({

})