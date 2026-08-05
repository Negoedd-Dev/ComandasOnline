import * as produtoService from "../services/produtoService.js";

export function listar(req, res) {
  res.json(produtoService.listarProdutos());
}

export function buscar(req, res) {
  const produto = produtoService.buscarProduto(req.params.id);
  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto não encontrado",
    });
  }
  res.json(produto);
}

export function criar(req, res) {
  try {
    const id = produtoService.criarProduto(req.body);

    res.status(201).json({ mensagem: "Produto criado com sucesso", id });
  } catch (erro) {
    res
      .status(erro.status || 500)
      .json({ sucesso: false, mensagem: erro.message });
  }
}

export function atualizar(req, res) {
  produtoService.atualizarProduto(req.params.id, req.body);

  res.json({ mensagem: "Produto atualizado", id });
}

export function excluir(req, res) {
  produtoService.excluirProduto(req.params.id);

  res.json({ mensagem: "Produto excluido com sucesso" });
}
