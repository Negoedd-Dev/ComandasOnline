import dotenv from "dotenv";
import app from "./app.js";
import "./database/schema.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
