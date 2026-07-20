export const adicionarPedido = (pedidos) => {
  return [...pedidos, { codigo: "", descricao: "", quantidade: 1, valor: 0 }];
};

export const atualizarPedido = (pedidos, index, campo, valor) => {
  return pedidos.map((pedido, indice) =>
    indice === index ? { ...pedido, [campo]: valor } : pedido,
  );
};

export const calcularPedido = (pedidos) => {
  return pedidos.reduce(
    (acc, item) => acc + item.quantidade * parseFloat(item.valor || 0),
    0,
  );
};

export const finalizarAtendimento = () => {
  return true;
};

export const cancelar = () => {
  return [];
};
