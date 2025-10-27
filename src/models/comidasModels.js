import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const encontreTodos = async () => {
    return await prisma.comida.findMany({
        orderBy: { nome: "asc" }
    });
}

export const encontreUm = async (id) => {
    return await prisma.comida.findUnique({
        where: { id: Number(id) }
    });
}

export const criar = async (dado) => {
    return await prisma.comida.create({
        data: {
            nome: dado.nome,
            tipo: dado.tipo,
            preco: dado.preco,
            descricao: dado.descricao
        }
    });
}

export const deletar = async (id) => {
    return await prisma.comida.delete({
        where: { id: Number(id) }
    });
}

export const atualizar = async (id, dado) => {
    return await prisma.comida.update({
        where: { id: Number(id) },
        data: {
            ...(dado.nome && {nome: dado.nome}),
            ...(dado.tipo && {tipo: dado.tipo}),
            ...(dado.preco && {preco: dado.preco}),
            ...(dado.descricao && {descricao: dado.descricao})
        }
    });
}