import React, { useEffect, useState } from "react";
import api, { API_BASE_URL } from "../api";

const URLList = () => {
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    try {
      const response = await api.get("/api/urls");
      if (Array.isArray(response.data)) {
        setUrls(response.data);
      } else {
        console.error("Unexpected API response:", response.data);
        setUrls([]);
      }
    } catch (error) {
      console.error("Error fetching URLs:", error);
      setUrls([]);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="flex flex-col min-h-[90vh]">
      <nav className="p-4 bg-blue-500 text-white flex justify-between shadow-md">
        <h1 className="text-2xl font-bold">URL-Shortener</h1>
        <div>
          <a href="/" className="mx-2 hover:underline">Home</a>
          <a href="/dashboard" className="mx-2 hover:underline">Dashboard</a>
        </div>
      </nav>

      <div className="flex-grow flex flex-col items-center justify-center px-5 py-10">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Shortened URLs</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="px-4 py-2 text-left border-r border-gray-300">Original URL</th>
                  <th className="px-4 py-2 text-left border-r border-gray-300">Short URL</th>
                  <th className="px-4 py-2 text-left">Clicks</th>
                </tr>
              </thead>
              <tbody>
                {urls.map((url) => {
                  const shortUrl = `${API_BASE_URL}/${url.shortId}`;

                  return (
                    <tr key={url._id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-2 border-r border-gray-300 text-blue-600 truncate max-w-[200px]">
                        <a href={url.originalUrl} target="_blank" rel="noopener noreferrer">
                          {url.originalUrl}
                        </a>
                      </td>
                      <td className="px-4 py-2 border-r border-gray-300">
                        <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                          {shortUrl}
                        </a>
                      </td>
                      <td className="px-4 py-2 text-center">{url.clickCount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default URLList;
