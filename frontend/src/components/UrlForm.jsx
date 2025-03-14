import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const UrlForm = () => {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!longUrl) {
        setError("URL is required");
        return;
    }

    try {
        const response = await axios.post("http://localhost:8001/url", { URL: longUrl });
        setShortUrl(`http://localhost:8001/${response.data.shortId}`);
        setError("");
    } catch (err) {
        setError("Error generating short URL");
        console.error(err);
    }
};

    return (
        <div className="url-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter long URL"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                />
                <button type="submit">Shorten URL</button>
            </form>
            {shortUrl && (
                <div className="short-url">
                    <p>Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default UrlForm;