const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.URL) return res.status(400).json({ error: "URL is required" });

    const shortID = shortid.generate();

    try {
        await URL.create({
            shortId: shortID,
            redirectURL: body.URL,
            visitHistory: [],
        });

        return res.json({ id: shortID });
    } catch (error) {
        console.error("Error creating new short URL:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function handleGetAnalytics(req, res) {
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
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
};