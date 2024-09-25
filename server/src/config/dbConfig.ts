import { Sequelize } from "sequelize";

const sequelize = new Sequelize("anime-blog", "root", "Thaveesha@98", {
  host: "localhost",
  dialect: "mysql",
  // logging: false,
});

export default sequelize;
