var express = require('express')
var axios = require('axios')
var app = express()

const PORT = 3000;
const REDIRECT_URI = 'http://coffee-redirect.lucienzimmermann.xyz';
const IFTTT_SERVICE_URI = 'https://maker.ifttt.com/trigger/rick_roll_coffee/with/key/lOT18SnpK41PKPK7fEUkS-4brBguqtJ_bVxs42LEqvk';

app.get('/', async (_, res) => {
    await axios.get(IFTTT_SERVICE_URI);
    res.redirect(REDIRECT_URI);
});

app.listen(PORT);
console.log(`serving on port ${PORT}`);