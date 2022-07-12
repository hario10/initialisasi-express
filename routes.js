const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'upload'});
const path = require('path');
const fs = require('fs');



router.get('/', (req, res) => {
    res.send({
        status: 'True',
        messages: 'Welcome to my website'
    });
});

router.get('/:home', (req, res) => {
    res.send(`
        <h1>Tugas ExpressJs</h1>
        <h3>Silahkan berikan koment kalian dibawah ini: </h3>
        <textarea />
    `)
});

router.post('/data', upload.single('gambar'), (req, res) => {
    const gambar = req.file;
    if(gambar) {
        const target = path.join(__dirname, 'upload', gambar.originalname);
        (gambar.path, target)
        fs.renameSync(gambar.path, target)
        res.json({
            gambar
        });
        
        // res.sendFile(target);
    }
})

router.get('/:home/:json', (req, res) => {
    res.send({
        id: '1',
        status: 'true',
        title: 'Cerita Hidupku',
        auditor: 'Hario Soedirman',
        deskripsi: 'Cerita ini adalah merupakan suatu pengalaman hidup yang begitu panjang. diceritakan sebagai upaya melepas sedikit beban yang ada'
    });
});

module.exports = router;