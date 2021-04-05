//Modulos
let express = require('express');
let app = express();

let mongo = require('mongodb');
let swig = require('swig');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let gestorBD = require("./modules/gestorBD.js");
gestorBD.init(app,mongo);

app.use(express.static('public'));

// Variables
app.set('port', 8081);
app.set('db','mongodb://admin:sdi@tiendamusica-shard-00-00.fgkzx.mongodb.net:27017,tiendamusica-shard-00-01.fgkzx.mongodb.net:27017,tiendamusica-shard-00-02.fgkzx.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mb2g3a-shard-0&authSource=admin&retryWrites=true&w=majority');

// Rutas/controladores por lógica
require("./routes/rusuarios.js")(app, swig, gestorBD); // (app, param1, param2, etc.)
require("./routes/rcanciones.js")(app, swig, gestorBD); // (app, param1, param2, etc.)
require("./routes/rautores.js")(app, swig); // (app, param1, param2, etc.)

// Lanzar el servidor
app.listen(app.get('port'),function () {
    console.log('Servidor activo');
});