// 📦 Import required modules
import express from "express";
import {db} from "./index.js"
import { TutionTable } from "./db/Schema.js";
import cors from "cors"

// 🚀 Initialize Express app
const app = express();

// 🔧 Middleware setup
app.use(express.json()) // Parse JSON request bodies
app.use(cors()) // Enable CORS for cross-origin requests

// 🎧 Start server on port 8080
app.listen(8080,()=>{
    console.log("port is running at 8080");
})

// 📝 POST endpoint to add a new tution
app.post("/", async(req, res) => {
    try {
        // 📥 Extract data from request body
        const {tution_name, owner_id} = req.body
        
        // ✅ Validate required fields
        if (!tution_name || !owner_id) {
            return res.status(400).json({
                error: "Missing required fields",
                message: "Both tution_name and owner_id are required"
            })
        }

        // 🖨️ Log received data for debugging
        console.log(tution_name, owner_id)
        
        // 💾 Insert tution data into database
        const addtution = await db.insert(TutionTable).values({
            tution_name,
            owner_id
        })
        
        // ✨ Send success response
        res.status(200).json({
            "message": "Tution Added Successfully",
        })
    } catch (error) {
        // ❌ Handle errors
        console.error("Error adding tution:", error)
        
        // 🚨 Send error response to client
        res.status(500).json({
            "message": "Failed to add tution"
        })
    }
});

