const express = require('express')
const app = express()

const routes = require('./routes')


const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://OmniStack:OmniStack@cluster0-luptd.mongodb.net/semana10?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })




app.use(express.json())
app.use(routes)
app.listen(3333)