const express = require('express')
const app = express()
const port = 3000

console.log("valor de __dirname:"+__dirname);
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.send('Hola Mundooooooooooo')
  })

  app.get('/usuarios', (req, res) => {
    res.send('Hola usuarios')
  })
  
  
  app.listen(port, () => {
    console.log(`Servidor Express Escuchando en puerto  ${port}`)
  })