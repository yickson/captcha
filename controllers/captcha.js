const captcha = require('../models/captcha');

const controller = {
    getCaptcha: async (req, res) => {
        const { base64 } = req.body;
        console.log('Ejecutando captcha...');
        console.log('Base64: ', base64);
        const captchaResolve = await captcha(base64);

        return res.status(200).send({
            captcha: captchaResolve.toUpperCase()
        })
    }
}

module.exports = controller;