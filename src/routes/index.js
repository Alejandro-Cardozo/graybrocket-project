const { Router } = require('express');
const router = Router();

const image = require('../models/image');

router.get('/',async(req, res) => {
    const images = await image.find();
    res.render('index', {images: images});
});

router.get('/upload', (req, res) => {
    res.render('upload');
});

router.post('/upload', async(req, res) => {
    
    //Object that I gonna store in my DB
    const img = new image();
    img.title = req.body.title;
    img.description = req.body.description;
    img.filename = req.file.filename
    img.path = '/img/uploads/' + req.file.filename;
    img.originalname = req.file.originalname;
    img.mimetype = req.file.mimetype;
    img.size = req.file.size;

    await img.save();

    res.redirect('/');
});

router.get('/img/:id', (req, res) => {
    res.send('profile img');
});

router.get('/img/:id/delete', (req, res) => {
    res.send('Deleted');
});

module.exports = router;