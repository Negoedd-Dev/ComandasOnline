import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import errorHandle from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use(errorHandle);

app.get("/api/status", (req, res) => {
  res.json({
    sistema: "AtendeOn",
    versao: "1.0.0",
    status: "online",
    data: new Date(),
  });
});
app.use(errorHandle);

export default app;
