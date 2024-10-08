const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlroute = require("./routes/url");
const URL = require("./models/url");
const cors = require("cors");

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url').then(() =>
    console.log("MongoDB has connected")
);

// Middleware
app.use(express.json());
app.use(cors());

app.use("/url", urlroute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        },
    });
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
