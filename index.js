/**
 * Created by L.Ribeiro on 8/13/2014.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());


users = [
    {
        username: 'david',
        password: 'password'
    }
]

app.set('veiw engine', 'ejs');
app.use('/', express.static(__dirname + '/public'));
app.get('/login', function(req, res){
    res.render('login', {})
});
app.post('/user/login', function (req, res){
    res.send

    ('okay!')
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

