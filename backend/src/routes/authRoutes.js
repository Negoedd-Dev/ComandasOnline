import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = express.Router();

// Usuário fake só para testes
const gestorFake = {
  id: 1,
  email: "gestor@empresa.com",
  senha: bcrypt.hashSync("123456", 8), // senha criptografada
};

// Rota de login
router.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (email !== gestorFake.email) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }

  const senhaValida = bcrypt.compareSync(senha, gestorFake.senha);
  if (!senhaValida) {
    return res.status(401).json({ mensagem: "Senha inválida" });
  }

  // Gera token JWT
  const token = jwt.sign(
    { id: gestorFake.id, role: "gestor" },
    "segredo_super_seguranca",
    { expiresIn: "1h" },
  );

  res.json({ token });
});

export default router;
