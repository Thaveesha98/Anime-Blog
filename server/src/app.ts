import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/dbConfig";
import authRoutes from "./routes/authRoutes";

// Connect to the database
dotenv.config();

// Define the express app instance and configure it with middleware and routes.
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
// Define routes
app.use("/api/auth", authRoutes);

// Initialize database
sequelize
  .sync()
  .then(() => console.log("Database synchronized"))
  .catch((err) => console.error("Database sync error: ", err));

// Start the server on the specified port
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
