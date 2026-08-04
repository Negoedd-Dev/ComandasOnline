const URL = "http://localhost:3001/api/produtos";

export async function listarProdutos(produto) {
  const resposta = await fetch(URL);
  return resposta.json();
}

export async function salvarProduto(produto) {
  const resposta = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(produto),
  });
  return resposta.json();
}
