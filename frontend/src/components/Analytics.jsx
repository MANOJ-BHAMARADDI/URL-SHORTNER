import React, { useState } from "react";
import axios from "axios";
import "../App.css";
const Analytics = () => {
    const [shortId, setShortId] = useState("");
    const [analytics, setAnalytics] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!shortId) {
            setError("Short ID is required");
            return;
        }
    
        try {
            const response = await axios.get(`http://localhost:8001/url/analytics/${shortId}`);
            setAnalytics(response.data);
            setError("");
        } catch (err) {
            setError("Error fetching analytics");
            console.error(err);
        }
    };

    return (
        <div className="analytics">
            <h2>Enter the last 9 characters of the short URL to get URL Analytics</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter URL ID (example: rPXRU-8BK) 9 characters"
                    value={shortId}
                    onChange={(e) => setShortId(e.target.value)}
                />
                <button type="submit">Get Analytics</button>
            </form>
            {analytics && (
                <div className="analytics-result">
                    <p>Total Clicks: {analytics.totalClicks}</p>
                    <ul>
                        {analytics.analytics.map((visit, index) => (
                            <li key={index}>Visited at: {new Date(visit.timestamp).toLocaleString()}</li>
                        ))}
                    </ul>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Analytics;