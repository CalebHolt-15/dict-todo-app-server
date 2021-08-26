import "dotenv/config"
import express from "express"
import mongoose from "mongoose"

const app = express()

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected DB"))

app.listen(8090, () => console.log("Server Started"))
