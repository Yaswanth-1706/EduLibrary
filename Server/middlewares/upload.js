const { CloudinaryStorage } = require("multer-storage-cloudinary")
const cloudinary = require("../config/cloudinary")
const multer = require("multer")

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const nameWithoutExt = file.originalname.replace(/\.[^/.]+$/, "")
    return {
      folder: "library_files",
      resource_type: "auto",
      public_id: Date.now() + "-" + nameWithoutExt,
    }
  },
})

const upload = multer({ storage })
module.exports = upload