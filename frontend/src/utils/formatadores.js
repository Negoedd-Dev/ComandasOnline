export function formatarMoeda(valor) {
  const numero = Number(valor) || 0;
  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function calcularTotalComanda(comanda) {
  if (!comanda) return 0;

  return comanda.itens.reduce((soma, item) => {
    return soma + item.quantidade * item.valor;
  }, 0);
}
