const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const studentRouter = require('./routes/details')
app.use('/aliens',studentRouter)

app.listen(3000, () => {
    console.log('Server started')
})