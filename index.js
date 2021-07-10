const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

module.exports = app

const rps = require('./routes/rps')
app.use('/rps', rps)