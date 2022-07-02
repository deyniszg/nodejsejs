const express = require('express')
const app = express()
const port = 3000

console.log("valor de __dirname:"+__dirname);

// Motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));



app.get('/', (req, res) => {
  res.render("indexFinal", { titulo: "Pagina Principal" });
})

app.get('/productos', (req, res) => {
  res.render("productosFinal", { tituloProductos: "Titulo Dinamico de Productos" });
})

app.get('/servicios', (req, res) => {
  res.render("serviciosFinal", { tituloServicios: "Titulo Dinamico de Servicios" });
})

app.get('/catalogos', (req, res) => {
  res.render("catalogosFinal", { tituloCatalogos: "Titulo Dinamico de Catalogos" });
})
  
  

app.use((req, res, next) => {
  res.status(404).render("404Final",{
    titulo: "Titulo de la pagina de Error",
    descripcion : "Descripcion de la Pagina de Eror"
  });
});
  
  app.listen(port, () => {
    console.log(`Servidor Express Escuchando en puerto  ${port}`)
  })

