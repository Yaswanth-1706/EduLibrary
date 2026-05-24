const express = require("express")

const fileController = require("../Contoller/FileController")
const search = require("../Contoller/SearchController")

const upload = require("../middlewares/upload")

const verify = require("../middlewares/Verifytoken")

const filerouter = express.Router()

// ADD FILE
filerouter.post(
  "/addFile",
  upload.single("image"),
  fileController.CreateFile
)

// GET FILES
filerouter.get(
  "/getFile",
  verify,
  fileController.getFile
)

// DELETE FILE
filerouter.delete(
  "/deleteFile/:id",
  fileController.deleteFile
)

// SEARCH
filerouter.get(
  "/search",
  search.searchFile
)

module.exports = filerouter