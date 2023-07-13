const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Post = require('./model/post')
// const bodyParser=require('body-Parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const photo = path.join(__dirname, 'upload');
app.use(cors())
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload')
    },
    filename: function (req, file, cb) {
        const fileNameArr = file.originalname.split('.');
        cb(null, file.fieldname + '-' + Date.now() + '.' + fileNameArr[fileNameArr.length - 1]);
    }
})
const upload = multer({ storage: storage })
//
async function connectDB() {
    try {
        return await mongoose.connect('mongodb+srv://alokraj:alok123@cluster0.6x7sl.mongodb.net/?retryWrites=true&w=majority');
        // mongoose.connect('mongodb://l/myapp');
    }
    catch (e) {
        console.log(e);
        // throw e('DB connection failed');
    }
}
async function main() {
    await connectDB();
    // app.use(bodyParser.json());
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(photo));
    app.get('/', function (req, res) {
        res.send({ message: 'welcome to instaclone' })
    })
    app.get('/api/v1/post', async function (req, res) {
        const posts = await Post.find();
        res.send(
            posts
        )
    })
    app.post('/api/v1/post', upload.single('image'), async function (req, res) {
        const { author, location, description } = req.body
        const image = req.file.filename
        console.log(req.file)
        const post = new Post({
            author: author,
            location: location,
            description: description,
            image: image
        })
        try {
            const savedValue = await post.save()
            res.json(savedValue)
        }
        catch (e) {
            res.json({ message: e })
        }
    })
    app.listen(process.env.PORT || 9000, () => console.log("server started"));
}
main()