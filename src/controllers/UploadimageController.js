const router = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer')


router.post('/posts', multer(multerConfig).single('file'), (req, res) => {     
    console.log(req.file)     
    return res.json({ hello: 'Arquivo enviado com sucesso'});
});



module.exports = router;