import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Funcionario = sequelize.define("Funcionario", {
  nome: {
    type: DtaTypes.STRING,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "ativo",
  },
});

export default Funcionario;
