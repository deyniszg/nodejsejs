const express = require('express')
const app = express()
const port = 3000

console.log("valor de __dirname:"+__dirname);

// Motor de plantillas
app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));



app.get('/', (req, res) => {
  res.render("index", { titulo: "Pagina Principal curso JS" });
})

app.get('/productos', (req, res) => {
  res.render("productos", { tituloProductos: "Titulo PRODUCTOS 1JUL22" });
})

app.get('/servicios', (req, res) => {
  res.render("servicios", { tituloServicios: "Titulo Dinamico de Servicios" });
})

app.get('/catalogos', (req, res) => {
  res.render("catalogos", { tituloCatalogos: "Titulo Dinamico de Catalogos" });
})
  
  

app.use((req, res, next) => {
  res.status(404).render("404",{
    titulo: "Titulo de la pagina de Error JULIO22",
    descripcion : "Descripcion de la Pagina de Eror JULIO 22"
  });
});
  
  app.listen(port, () => {
    console.log(`Servidor Express Escuchando en puerto  ${port}`)
  })

