import mongoose from "mongoose";
import { nanoid } from "nanoid";

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortId: { 
    type: String, 
    required: true, 
    unique: true, 
    default: () => nanoid(6) 
  },
  createdAt: { type: Date, default: Date.now },
  clickCount: { type: Number, default: 0 } 
});

const Url = mongoose.model("Url", urlSchema);
export default Url;
