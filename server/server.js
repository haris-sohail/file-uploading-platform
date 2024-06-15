const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const mime = require('mime-types');

const app = express();
app.use(cors())
app.use(express.json())

// create a directory if it doesn't already exists using the file system module
const createDirIfNotExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
}

// set storage engine for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const fileType = file.mimetype.split('/')[0];
        const folderName = `${fileType}-folder`;
        const uploadPath = path.join(__dirname, 'uploads', folderName);

        createDirIfNotExists(uploadPath)

        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage })

app.post('/storeOnHDD', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('File upload failed');
    }

    res.status(200).send({
        message: 'File uploaded successfully',
        file: req.file,
    });
})


const getAllFilesMetadataFromDirectory = (dirPath, arrayOfFiles) => {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            arrayOfFiles = getAllFilesMetadataFromDirectory(filePath, arrayOfFiles);
        } else {
            arrayOfFiles.push({
                name: file,
                type: mime.lookup(filePath) || 'unknown',
                size: stats.size,
            });
        }
    });

    return arrayOfFiles;
};

app.get('/getAllFilesFromHDD', (req, res) => {
    try {
        const uploadBasePath = path.join(__dirname, 'uploads');
        const filesMetadata = getAllFilesMetadataFromDirectory(uploadBasePath);

        res.status(200).send({
            files: filesMetadata,
        });
    } catch (err) {
        res.status(500).send({
            message: 'Failed to retrieve files metadata',
            error: err.message,
        });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server listening the port http://localhost/" + port);
});