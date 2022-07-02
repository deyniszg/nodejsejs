const express = require('express')
const app = express()

let notes = [
  {
    id: 1,
    content: "HTML Facil",
    date: "2022-01-10T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "JavaScript",
    date: "2022-01-10T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "Protocolos HTTP",
    date: "2022-01-10T19:20:14.298Z",
    important: true
  }
]

app.use(express.json())

//Pagina /inicial
app.get('/', (req, res) => {
  res.send('<h1>Pagina Inicial</h1>')
})

//Genera ID
const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

//Genera Dinamicante notas
app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})

//Muestra todas las notas
app.get('/api/notes', (req, res) => {
  res.json(notes)
})

//Borra notas x Id
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

//Busca Notas X ID
app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})


//Declara Servidor

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})