import { Router } from "express";
import { handleGenerateNewShortURL, handleGetAnalytics } from "../controllers/url.js"; // Add .js extension

const router = Router();

router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);

export default router; // Use default export