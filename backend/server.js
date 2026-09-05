import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import transporter from "./config/mailer.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running.",
  });
});

app.use("/api/contact", contactRoutes);

transporter
  .verify()
  .then(() => {
    console.log("Gmail connection successful!");
  })
  .catch((error) => {
    console.error("Gmail connection failed:", error.message);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});