const express = require('express');
const captchaController = require('../controllers/captcha');
const router = express.Router();

router.get('/test', ((req, res) => {
    res.status(200).send({
        message: 'Working!!!'
    })
}))
router.post('/getCaptcha', captchaController.getCaptcha);

module.exports = router;