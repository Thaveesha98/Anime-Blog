import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/dbConfig";
import authRoutes from "./routes/authRoutes";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

// Initialize database
sequelize
  .sync()
  .then(() => console.log("Database synchronized"))
  .catch((err) => console.error("Database sync error: ", err));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
