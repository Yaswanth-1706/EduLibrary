const FileModel = require("../models/Files")

// CREATE FILE
const CreateFile = async (req, res) => {
  try {

    const { name, discription } = req.body

    // CHECK FILE
    if (!req.file) {
      return res.status(400).json({
        message: "File is required"
      })
    }

    // CLOUDINARY URL
    const imageLink = req.file.path

    const newFile = await FileModel.create({
      name,
      discription,
      image: imageLink
    })

    console.log("File uploaded successfully")

    res.status(201).json(newFile)

  } catch (err) {

    console.log("File upload failed:", err)

    res.status(500).json({
      message: "Server error while uploading file"
    })
  }
}

// GET FILES
const getFile = async (req, res) => {
  try {

    const files = await FileModel.find()

    console.log(files)

    res.status(200).json(files)

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: "Server experiencing an error"
    })
  }
}

// DELETE FILE
const deleteFile = async (req, res) => {
  try {

    const deletedFile = await FileModel.findByIdAndDelete(
      req.params.id
    )

    if (!deletedFile) {
      return res.status(404).json({
        message: "Record does not exist"
      })
    }

    console.log(deletedFile)

    res.status(200).json({
      message: "File deleted successfully"
    })

  } catch (err) {

    console.log("File not deleted:", err)

    res.status(500).json({
      message: "Server experiencing some error"
    })
  }
}

module.exports = {
  CreateFile,
  getFile,
  deleteFile
}