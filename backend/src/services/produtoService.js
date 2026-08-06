import * as produtoModel from "../models/produtoModel.js";

export function listarProdutos() {
  return produtoModel.listarProdutos();
}

export function buscarProduto(id) {
  return produtoModel.buscarProduto(id);
}

export function criarProduto(produto) {
  const existe = produtoModel.buscarPorCodigo(produto.codigo);

  if (existe) {
    const erro = new Error("Código já cadastrado para outro produto.");
    erro.status = 409;

    throw erro;
  }
  return produtoModel.criarProduto(produto);
}

export function atualizarProduto(id, produto) {
  return produtoModel.atualizarProduto(id, produto);
}

export function excluirProduto(id) {
  return produtoModel.excluirProduto(id);
}
