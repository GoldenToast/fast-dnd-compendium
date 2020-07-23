var proxy = require('express-http-proxy');
var app = require('express')();
app.use('/', proxy('www.dnd5eapi.co'));
const port = process.env.PORT || 3000

app.listen(port, function () {
    console.log('Example app listening on port ${port} !');
});