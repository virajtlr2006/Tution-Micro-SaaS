import express from "express";
import {db} from "./index.js"
import { TutionTable } from "./db/Schema.js";
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())

app.listen(8080,()=>{
    console.log("port is running at 8080");
})

app.post("/", async(req, res) => {
    const {tution_name,owner_id} = req.body
    console.log(tution_name,owner_id)
    const addtution = await db.insert(TutionTable).values({tution_name,owner_id})
    res.status(200).json(
        {"message":"Tution Added Successfully"}
    )
});

