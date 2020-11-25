const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/Auth')


router.use(authMiddleware)
router.get('/', async (req, res) => {

    res.send({ ok : true , user: req.userId })
    

});


module.exports = router;