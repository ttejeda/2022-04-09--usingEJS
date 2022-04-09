var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.set('view engine', 'ejs'); // Integración del view engine (una vez instalado). Ahora la página renderizará las vistas de la carpeta views
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next){
    console.log('Request Url:' + req.url);
    next();
});

app.get('/', function (req, res){
    res.render('index'); // Renderizará index.ejs
});

app.get('/api', function (req, res){
    res.json({firstname: 'Tirzo', lastname: 'Tejeda'});
});

app.get('/person/:id', function (req, res){
    res.render('person', {ID: req.params.id}); // Renderizará person.ejs y le enviamos el valor que debe de tomar ID
}); // En views/person.ejs se recibe un valor especial llamado ID, en la línea anterior se paso el valor de ID mediante el route handler.

app.listen(port);