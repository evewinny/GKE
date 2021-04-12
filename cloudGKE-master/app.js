'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama, evelyn winny thody\n')
    res.send('Jurusan Sistem Informasi\n')
    res.send('NIM 51018005\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
