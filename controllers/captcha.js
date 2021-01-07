const captcha = require('../models/captcha');

const controller = {
    getCaptcha: async (req, res) => {
        const { base64 } = req.body;

        const captchaResolve = await captcha(base64);

        return res.status(200).send({
            captcha: captchaResolve
        })
    }
}

module.exports = controller;