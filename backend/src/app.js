import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import routes from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

sequelize.sync().then(() => {
  console.log("Banco SQLite sincronizado com sucesso!");
  app.listen(3001, () => console.log(`Servidor rodando na porta ${PORT}`));
});

app.get("/api", (req, res) => {
  res.json({
    mensagem: "API AtendeOn funcionando!",
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    sistema: "AtendeOn",
    versao: "1.0.0",
    status: "online",
    data: new Date(),
  });
});

export default app;
