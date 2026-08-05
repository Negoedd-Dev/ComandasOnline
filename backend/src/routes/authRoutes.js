import express from "express";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

const router = express.Router();

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
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  res.json({ token });
});

export default router;
