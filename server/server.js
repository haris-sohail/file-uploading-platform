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
    // Check if the model already exists
    if (mongoose.models[fileType]) {
        return mongoose.model(fileType);
    }

    // Define schema and create model
    const dynamicSchema = new mongoose.Schema({
        fileName: String,
        fileType: String,
        fileSize: Number,
        username: String
    });

    return mongoose.model(fileType, dynamicSchema, fileType);
};

app.post('/uploadFileDB', upload.single('file'), (req, res) => {
    const file = req.file

    const fileType = file.mimetype.split('/')[0];

    const username = req.body.username;


    // Check if model for this fileType already exists, else create it
    let DynamicFileModel;
    try {
        DynamicFileModel = mongoose.model(fileType);
    } catch (error) {
        DynamicFileModel = createFileModel(fileType);
    }

    const newFile = new DynamicFileModel({
        fileName: file.originalname,
        fileType: fileType,
        fileSize: file.size,
        username: username
    });

    newFile.save()
        .then(() => res.send('File uploaded and stored successfully.'))
        .catch(err => res.send('Error storing file: ' + err.message));
})

app.get('/getFiles', async (req, res) => {
    const username = req.query.username;
    console.log(username)
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        // Filter out the 'users' collection
        const filteredCollections = collections.filter(collection => collection.name !== 'users');
        
        const filePromises = filteredCollections.map(collection => {
            const DynamicFileModel = createFileModel(collection.name);
            return DynamicFileModel.find({ username: username }).exec();
        });

        const filesArrays = await Promise.all(filePromises);
        const files = filesArrays.flat();

        res.send(files);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error fetching files: ' + err.message);
    }
});

const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server listening the port http://localhost/" + port);
});