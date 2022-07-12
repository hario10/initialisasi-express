const express = require('express');
const app = express();
const router = require('./routes');
const cors = require('cors');
const path = require('path');
const dataLog = require('./middleware/Datalogger');


app.use(dataLog);
app.use(express.urlencoded({extended: true}));
app.use('/gambar', express.static(path.join(__dirname, 'upload')));
app.use(cors());
app.use(router);
app.use((req, res) => {
    res.status(402);
    res.send({
        status: 'Failed',
        messages: 'Hasil ' + req.originalUrl + ' Tidak ditemukan'
    });
});

app.listen(4000, () => console.log('Server: http://localhost:4000'));