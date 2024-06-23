const mongoose = require("mongoose")

const FileSchema = new mongoose.Schema({
    fileName: String,
    fileType: String,
    fileSize: Number,
    username: String
});

const FileModel = mongoose.model("Files", FileSchema)

module.exports = FileModel