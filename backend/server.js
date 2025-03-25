import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import urlRoutes from "./routes/urlRoutes.js";
import { redirectUrl, getAllUrls } from "./controllers/urlController.js";

dotenv.config();
const app = express();

app.use(cors()); 
app.use(express.json()); 

app.use("/api", urlRoutes);
app.get("/:shortId", redirectUrl);  
app.get("/urls", getAllUrls); 

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, { dbName: "urlShortener" })
  .then(() => {
    console.log("🔥 MongoDB Connected Successfully!");
  })
  .catch((err) => console.error("MongoDB connection error:", err));
  const server = app.listen(PORT, () =>
    console.log(`✅ Server running on port ${PORT}`)
  );


export default app;
