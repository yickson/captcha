const fetch = require('node-fetch');

const imageResolver = async function imageResolver(body){

    const secondRes = async (id) => {
        const resp = await fetch(`${process.env.CAPTCHA_URL}res.php?key=${details.key}&action=get&id=${id}`)
        const cad = await resp.text();
        if (cad !== 'CAPCHA_NOT_READY') {
            return cad.split("|")[1];
        } else {
            return await secondRes(id);
        }
    }

    const details = {
        'key': process.env.KEY,
        'method': 'base64',
        'body': body
    };
    let formBody = [];
    for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    };

    const req1 = await fetch(`${process.env.CAPTCHA_URL}in.php`, options);
    const resp1 = await req1.text();
    const id = resp1.split("|")[1];
    return await secondRes(id);

}

const respuesta = async (body) => {
    return await imageResolver(body);
};

module.exports = respuesta;