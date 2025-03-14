import React from "react";
import UrlForm from "./components/UrlForm";
import Analytics from "./components/Analytics";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <h1>URL Shortener</h1>
            <UrlForm />
            <Analytics />
        </div>
    );
};

export default App;