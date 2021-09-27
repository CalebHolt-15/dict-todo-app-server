import "dotenv/config" //load env variables from .env
import express, { urlencoded } from "express"
import mongoose from "mongoose"
import todolistRouter from "./todo/todolist.router.js" //wontwork w/o .js extnsn
import cors from "cors"
// import { urlencoded } from "body-parser"

const app = express()

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected DB"))

app.use(express.json()) //allowservertoaccept json asabody insideGET/POST/..element
app.use(urlencoded({ extended: true }))

app.use((req, res, next) => {
  console.log(req.headers)
  console.log(res.headers)

  next()
})
 
app.disable("x-powered-by") 
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: [
      "Origin",
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin"
    ],
    credentials: true 
  })
)

console.log("here")
// app.use("/addtodo", todolistRouter)
app.use("/todo", todolistRouter)

app.listen(8090, () => console.log("Server Started at 8090"))
