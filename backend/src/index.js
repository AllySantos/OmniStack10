const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://OmniStack:OmniStack@cluster0-luptd.mongodb.net/semana10?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Banco conectado')
}).catch((erro) =>{
    console.log('erro' + erro)
})



app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333)