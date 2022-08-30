const express = require('express')
const app = express()

//Importar conexion MongoBD
const archivoBD = require('./conexion')

//Importacion del archivo de rutas y model de usuario
const rutausuario = require('./rutas/usuario')


//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor Backend Node.js')
})

//Configuracion de server basico
app.listen(5000, function(){
    console.log('El servidor NODE de SrRetro esta corriendo correctamente')
})