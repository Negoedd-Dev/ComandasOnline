import * as produtoModel from "../models/produtoModel.js";
import AppError from "../utils/AppError.js";

export function listarProdutos() {
  return produtoModel.listarProdutos();
}

export function buscarProduto(id) {
  return produtoModel.buscarProduto(id);
}

export function criarProduto(produto) {
  if (!produto.codigo) {
    throw new AppError("Informe o código do produto.", 400);
  }
  if (!produto.descricao) {
    throw new AppError("Informe a descrição do produto.", 400);
  }
  if (!produto.categoria) {
    throw new AppError("Informe a categoria do produto.", 400);
  }
  if (produto.preco === undefined || produto.preco === null) {
    throw new AppError("Informe o preço do produto.", 400);
  }
  if (Number(produto.preco) <= 0) {
    throw new AppError("Preço inválido.", 400);
  }

  const existe = produtoModel.buscarPorCodigo(produto.codigo);

  if (existe) {
    throw new AppError("Código já cadastrado para outro produto", 409);
  }
  return produtoModel.criarProduto(produto);
}

export function atualizarProduto(id, produto) {
  return produtoModel.atualizarProduto(id, produto);
}

export function excluirProduto(id) {
  return produtoModel.excluirProduto(id);
}
