import { DataTypes, Model } from "sequelize";
import sequelize from "../config/dbConfig";

class User extends Model {
  public id!: number;
  public email!: string;
  public username!: string;
  public password!: string;
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
  }
);

export default User;
