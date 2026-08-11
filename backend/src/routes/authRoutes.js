import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = Router();

const gestorFake = {
  id: 1,
  email: "gestor@empresa.com",
  senha: bcrypt.hashSync("123456", 8),
};

// Rota de login
router.post("/login", (req, res) => {
  console.log("Rota acessada com sucesso, LOGIN!");

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
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  res.json({ mensagem: "Login realizado com sucesso.", token });
});

export default router;
