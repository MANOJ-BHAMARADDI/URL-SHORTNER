import { generate } from "shortid";
import URL from "../models/url.js"; // Add .js extension

const handleGenerateNewShortURL = async function (req, res) {
    const body = req.body;
    if (!body.URL) return res.status(400).json({ error: "URL is required" });

    const shortID = generate();

    try {
        await URL.create({
            shortId: shortID,
            redirectURL: body.URL,
            visitHistory: [],
        });

        return res.json({ shortId: shortID });
    } catch (error) {
        console.error("Error creating new URL:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const handleGetAnalytics = async function (req, res) {
    const shortId = req.params.shortId;

    try {
        const result = await URL.findOne({ shortId });

        if (!result) {
            return res.status(404).json({ error: "URL not found" });
        }

        return res.json({
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory,
        });
    } catch (error) {
        console.error("Error fetching analytics:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export { handleGenerateNewShortURL, handleGetAnalytics }; // Use named exports