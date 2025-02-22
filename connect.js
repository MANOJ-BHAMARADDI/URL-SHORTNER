const { connect } = require("mongoose");

async function connectToMongoDB(url) {
    try {
        await connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

module.exports = { connectToMongoDB }; 
