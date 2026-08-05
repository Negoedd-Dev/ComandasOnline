import * as produtoModel from "../models/produtoModel.js";

export function listarProdutos() {
  return produtoModel.listarProdutos();
}

export function buscarProduto(id) {
  return produtoModel.buscarProduto(id);
}

export function criarProduto(produto) {
  const existente = produtoModel.buscarPorCodigo(produto.codigo);

  if (existente) {
    throw new Error("Código já cadastrado para outro produto.");
  }
  return produtoModel.criarProduto(produto);
}

export function atualizarProduto(id, produto) {
  return produtoModel.atualizarProduto(id, produto);
}

export function excluirProduto(id) {
  return produtoModel.excluirProduto(id);
}
