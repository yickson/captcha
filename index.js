const app = require('./app');
const port = 3007;

app.listen(port, () => {
    console.log('Escuchando servidor de captcha...');
})