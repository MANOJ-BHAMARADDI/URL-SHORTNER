require('dotenv').config();
const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlroute = require("./routes/url");
const URL = require("./models/url");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8001;

connectToMongoDB(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());
app.use(cors());

app.use("/url", urlroute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            },
            { new: true } // Return the updated document
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

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
