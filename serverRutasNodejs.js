const http = require("http");
const host = 'localhost';
const port = 8000;

const books = JSON.stringify([
    { title: "El Alquimista", author: "Paulo Coelho", year: 1988 },
    { title: "El Profeta", author: "Kahlil Gibran", year: 1923 }
]);
const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");

    console.log("ruta URL:"+req.url);

    switch (req.url) {

        case "/books":
            res.writeHead(200);
            res.end(books);
            break
        case "/autores":
            res.writeHead(200);
            res.end(authors);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Recurso NO encontrado"}));
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Mi primer servidr URL http://${host}:${port}`);
});