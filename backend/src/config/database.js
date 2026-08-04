import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/atendeon.db",
  logging: false,
});

export default sequelize;
