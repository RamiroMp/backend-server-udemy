// requires 

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const serveIndex = require('serve-index');



// Inicializar Variables

const app = express();





// Body-Parser
// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {

    if (err) throw err;
    console.log('Base de datos port 27017: \x1b[32m%s\x1b[0m', 'online');

});
mongoose.set('useFindAndModify', false);




// Importar rutas
let appRoutes = require('./routes/app');
let usuarioRoutes = require('./routes/usuario');
let loginRoutes = require('./routes/login');
let hospitalRoutes = require('./routes/hospital');
let medicoRoutes = require('./routes/medico');
let busquedaRoutes = require('./routes/busqueda');
let uploadRoutes = require('./routes/upload');
let imagenesRoutes = require('./routes/imagenes');

//app.use(express.static(__dirname + '/'))
//app.use('/uploads', serveIndex(__dirname + '/uploads'));

// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicoRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/img', imagenesRoutes);
app.use('/', appRoutes);


// Escuchar puerto

app.listen(3000, () => {
    console.log('Express Server en puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});