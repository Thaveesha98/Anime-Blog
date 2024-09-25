import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Define the expected environment variables
interface EnvVariables {
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_DIALECT: "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql";
}

// Validate environment variables
const validateEnv = (): EnvVariables => {
  const requiredEnvs: (keyof EnvVariables)[] = [
    "DB_NAME",
    "DB_USERNAME",
    "DB_PASSWORD",
    "DB_HOST",
    "DB_DIALECT",
  ];

  for (const envVar of requiredEnvs) {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  }

  return process.env as unknown as EnvVariables;
};

const env = validateEnv();

// Create a Sequelize instance using the validated environment variables
const sequelize = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
});

export default sequelize;
