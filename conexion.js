const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/crudmern');
mongoose.connect('mongodb+srv://SrRetro:054503reymist.@cluster0.juqyqem.mongodb.net/?retryWrites=true&w=majority');
const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexion correcta a MongoDB')})
objetobd.on('error', ()=>{console.log('Error en la conexion a MongoDB')})

module.exports = mongoose