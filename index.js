var express = require('express')
var axios = require('axios')
var app = express()

const PORT = process.env.PORT || 3000;
const IFTTT_KEY = process.env.IFTTT_KEY || '<enter key here>';
const REDIRECT_URI = 'http://coffee-redirect.lucienzimmermann.xyz';
const IFTTT_SERVICE_URI = `https://maker.ifttt.com/trigger/rick_roll_coffee/with/key/${IFTTT_KEY}`;

app.get('/', async (_, res) => {
    await axios.get(IFTTT_SERVICE_URI);
    res.redirect(REDIRECT_URI);
});

app.listen(PORT, () => {
    console.log(`serving on port ${PORT}`);
});
