export async function carregarChave(chave, valorPadraO) {
  try {
    const resultado = await window.Storage.get(chave, false);

    if (resultado && resultado.value) {
      return JSON.parse(resultado.value);
    }

    return valorPadrao;
  } catch {
    return valorPadrao;
  }
}

export async function salvarChave(chave, valor) {
  try {
    await window.Storage.set(chave, JSON.stringify(valor), false);
  } catch (erro) {
    console.error(erro);
  }
}
