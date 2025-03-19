import Url from "../models/Url.js";
import { nanoid } from "nanoid";

export const shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    if (!originalUrl) {
      return res.status(400).json({ message: "URL is required" });
    }

    let existingUrl = await Url.findOne({ originalUrl });
    if (existingUrl) {
      return res.json({ shortUrl: `${process.env.BASE_URL}/${existingUrl.shortId}` });
    }

    const shortId = nanoid(6);

    const newUrl = await Url.create({ originalUrl, shortId });

    res.json({ shortUrl: `${process.env.BASE_URL}/${shortId}` });
  } catch (error) {
    console.error("Error shortening URL:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const redirectUrl = async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const url = await Url.findOneAndUpdate(
      { shortId },
      { $inc: { clickCount: 1 } }, 
      { new: true }
    );

    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }
    res.redirect(url.originalUrl);
  } catch (error) {
    console.error("Error redirecting URL:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find();
    res.json(urls);
  } catch (error) {
    console.error("Error fetching URLs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

