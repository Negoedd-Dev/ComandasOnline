import db from "../config/database.js";

export function listarProdutos() {
  return db.prepare("SELECT * FROM produtos ORDER BY descricao").all();
}

export function buscarPorCodigo(codigo) {
  return db.prepare("SELECT * FROM produtos WHERE codigo = ?").get(codigo);
}

export function criarProduto(produto) {
  const existe = db
    .prepare("SELECT id FROM produtos WHERE codigo = ?")
    .get(produto.codigo);

  if (existe) {
    const erro = new Error("Código já cadastrado.");
    erro.status = 400;
    throw erro;
  }

  const stmt = db.prepare(
    `INSERT INTO produtos(codigo, descricao, categoria, preco, ativo) VALUES(?, ?, ?, ?, ?)`,
  );

  const info = stmt.run(
    produto.codigo,
    produto.descricao,
    produto.categoria,
    produto.preco,
    produto.ativo ?? 1,
  );

  return info.lastInsertRowid;
}

export function atualizarProduto(id, produto) {
  db.prepare(
    `UPDATE produtos SET codigo=?, descricao=?, categoria=?, preco=?, ativo=?, updated_at=CURRENT_TIMESTAMP WHERE id=?`,
  ).run(
    produto.codigo,
    produto.descricao,
    produto.categoria,
    produto.preco,
    produto.ativo,
    id,
  );
}

export function excluirProduto(id) {
  db.prepare("DELETE FROM produtos WHERE id=?").run(id);
}
