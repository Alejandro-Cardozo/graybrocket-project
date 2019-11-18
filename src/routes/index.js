const { Router } = require('express');
const router = Router();

router.get('/',(req, res) => {
    res.send('Hello');
});

router.get('/upload', (req, res) => {
    res.send('Form upload');
});

router.post('/upload', (req, res) => {
    res.send('Yippee-ki-yay madafaka');
});

router.get('/image/:id', (req, res) => {
    res.send('profile img');
});

router.get('/image/:id/delete', (req, res) => {
    res.send('Deleted');
});

module.exports = router;