import funcionario from "../models/funcionarioModel.js";

export async function listarFuncionarios(req, res) {
  const funcionarios = await Funcionario.findAll();
  res.json(funcionarios);
}

export async function criarFuncionario(req, res) {
  const { nome, cargo } = req.body;
  const novo = await Funcionario.create({ nome, cargo });
  res.status(201).json(novo);
}

export async function atualizarFuncionario(req, res) {
  const { id } = req.params;
  const { nome, cargo, status } = req.body;
  const funcionario = await Funcionario.findByPk(id);
  if (!funcionario) return res.status(404).json({ mensagem: "Não encontrado" });

  await funcionario.update({ nome, cargo, status });
  res.json(funcionario);
}

export async function deletarFuncionario(req, res) {
  const { id } = req.params;
  const funcionario = await Funcionario.findByPk(id);
  if (!funcionario) return res.status(404).json({ mensagem: "Não encontrado" });

  await funcionario.destroy();
  res.json({ mensagem: "Funcionário removido com sucesso" });
}
