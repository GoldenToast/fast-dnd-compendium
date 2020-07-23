var proxy = require('express-http-proxy');
var app = require('express')();
app.use('/', proxy('www.dnd5eapi.co'));
const port = process.env.PORT || 3000

if(process.env.NODE_ENV === 'production'){
    app.use(app.static(__dirname + '/public'))
    app.get(/.*/), (req,res) => res.sendFile(__dirname + '/public/index.html')
}

app.listen(port, function () {
    console.log(`Example app listening on port ${port} !`);
});