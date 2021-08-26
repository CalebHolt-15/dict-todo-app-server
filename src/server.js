import "dotenv/config" //load env variables from .env
import express from "express"
import mongoose from "mongoose"
import todolistRouter from "./routes/todolist.router.js" //wontwork w/o .js extnsn

const app = express()

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected DB"))

app.use(express.json()) //allowservertoaccept json asabody insideGET/POST/..element

app.use("/todo", todolistRouter)

app.listen(8090, () => console.log("Server Started at 8090"))
