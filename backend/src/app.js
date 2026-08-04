import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

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
