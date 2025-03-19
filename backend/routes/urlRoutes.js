import express from "express";
import { shortenUrl, getAllUrls, redirectUrl } from "../controllers/urlController.js";

const router = express.Router();

router.post("/shorten", shortenUrl);
router.get("/urls", getAllUrls);
router.get("/:shortId", redirectUrl);

export default router;
