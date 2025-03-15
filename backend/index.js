import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectToMongoDB } from "../connect.js";
import urlroute from "../routes/url.js";
import URL from "../models/url.js";
import cors from "cors";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();
app.use(express.json());
app.use(cors());

connectToMongoDB(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api", urlroute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (entry) {
      res.redirect(entry.redirectURL);
    } else {
      res.status(404).send("URL not found");
    }
  } catch (error) {
    console.error("Error finding and updating URL:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Export Express app as a serverless function
export default (req = VercelRequest, res = VercelResponse) =>
  app(req, res);
