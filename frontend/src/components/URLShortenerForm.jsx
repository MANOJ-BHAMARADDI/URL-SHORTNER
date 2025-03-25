import { useState } from "react";
import axios from "axios";


const URLShortenerForm = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    try {
      // const res = await api.post("/api/shorten", { originalUrl });
      const res = await axios.post("http://localhost:5000/api/shorten", { originalUrl });

      // Ensure short URL is always valid
      setShortUrl(res.data.shortUrl);
    } catch (error) {
      console.error("Error shortening URL", error);
    }
  };

  return (
    <div className="flex flex-col min-h-[90vh]">
      <nav className="p-4 bg-blue-500 text-white flex justify-between">
        <h1 className="text-2xl font-bold">URL-Shortener</h1>
        <div>
          <a href="/" className="mx-2 hover:underline">Home</a>
          <a href="/dashboard" className="mx-2 hover:underline">Dashboard</a>
        </div>
      </nav>

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="p-10 bg-white shadow-lg rounded-lg text-center w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-6">Shorten your long URLs in seconds</h2>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter long URL"
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300"
              onClick={handleShorten}
            >
              Shorten URL
            </button>
          </div>

          {shortUrl && (
            <div className="mt-6">
              <p className="text-lg font-semibold">Short URL:</p>
              <a href={shortUrl} target="_blank" className="text-blue-700 break-all">
                {shortUrl}
              </a>
            </div>
          )}
        </div>
      </div>

      <footer className="p-5 -m-5 bg-gray-900 text-white text-center">
        <p>Connect with me:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://linkedin.com/in/manoj" target="_blank">🔗 LinkedIn</a>
          <a href="https://github.com/manoj" target="_blank">💻 GitHub</a>
          <a href="https://twitter.com/manoj" target="_blank">🐦 Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default URLShortenerForm;
