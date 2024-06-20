const express = require('express')
const cors = require('cors')
const mime = require('mime-types');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const FileModel = require('./Models/Files');

const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

mongoose.connect('mongodb://localhost:27017/FileUp');


const createFileModel = (fileType) => {
    const dynamicSchema = new mongoose.Schema({
        id: String,
        fileName: String,
        fileType: String
    });

    return mongoose.model(fileType, dynamicSchema, fileType);
};

app.post('/uploadFileDB', upload.single('file'), (req, res) => {
    const file = req.file

    const fileType = file.mimetype.split('/')[0];


    // Check if model for this fileType already exists, else create it
    let DynamicFileModel;
    try {
        DynamicFileModel = mongoose.model(fileType);
    } catch (error) {
        DynamicFileModel = createFileModel(fileType);
    }

    const newFile = new DynamicFileModel({
        fileName: file.originalname,
        fileType: fileType
    });

    newFile.save()
        .then(() => res.send('File uploaded and stored successfully.'))
        .catch(err => res.send('Error storing file: ' + err.message));
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server listening the port http://localhost/" + port);
});