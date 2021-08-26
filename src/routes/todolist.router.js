// import express from "express"
import { Router } from "express"
const router = Router()

//RESTFUL APIS
//getall
router.get("/", (req, res) => {
  res.send("get all")
})

//getOne
router.get("/:id", (req, res) => {
  res.send(req.params)
})

//add
router.post("/", (req, res) => {
  res.send("post")
})

//update only the info passed by user
router.patch("/:id", (req, res) => {
  //   res.send("patch")
  res.send(req.params)
})

//update entire info at once
router.put("/:id", (req, res) => {
  res.send(req.params)
})

//delete
router.delete("/:id", (req, res) => {
  res.send(req.params)
})

export default router
