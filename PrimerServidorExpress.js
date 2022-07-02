const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola Mundo Servidor Express')
})


 
app.listen(port, () => {
  console.log(`modificacion Servidor Express Escuchando en puerto  ${port}`)
})