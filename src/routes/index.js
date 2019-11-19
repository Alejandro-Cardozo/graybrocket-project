const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra'); //Necessary to delete an image

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

router.get('/img/:id', async(req, res) => {
    const { id } = req.params;
    const img = await image.findById(id);
    res.render('profile', { image: img});
});

router.get('/img/:id/delete', async(req, res) => {
    const { id } = req.params;
    const delImage = await image.findByIdAndDelete(id); //Deleted image's object
    await unlink(path.resolve('./src/public/' + delImage.path));
    res.redirect('/');
});

module.exports = router;