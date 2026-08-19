import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/api", (req, res) => {
  res.json({
    mensagem: "Api AtendeOn funcionando",
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

app.use(errorHandler);

export default app;
