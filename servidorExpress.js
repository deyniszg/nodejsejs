const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola Mundoo')
})

app.get('/usuario', (req, res) => {
    res.send('Hola Usuario')
  })

app.get('/servicios', (req, res) => {
    res.send('En la url de Servicios')
  })

app.listen(port, () => {
  console.log(`Servidor Express Escuchando en puerto  ${port}`)
})