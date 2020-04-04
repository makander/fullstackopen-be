require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())

app.use(bodyParser.json())

morgan.token('reqBody', (req) => JSON.stringify(req.body))

app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms - :reqBody'
  )
)

app.use(express.static('build'))
const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformed id' })
  } else if (error.name === 'ValidationError:') {
    return response.status(400).toJSON({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)


app.get('/api/person', (req, res) => {
  Person.find({}).then((data) => {
    res.json(data.map((person) => person.toJSON()))
  })
})


app.get('/info', (req, res) => {
  Person.count({}).then((data) => {
    console.log(typeof data)
    res.send(`Phonebook has info for ${data} people` + '</br>' + new Date())
  })
})

app.get('/api/person/:id', (req, res, next) => {
  const id = req.params.id
  Person.findById(id)
    .then((person) => {
      if (person) {
        res.json(person.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch((error) => {
      next(error)
    })
})

app.delete('/api/person/:id', (req, res, next) => {
  const id = req.params.id
  console.log(id)
  Person.findByIdAndRemove(id).then(() =>
    res.send('deleted'))
    .catch((error) => {
      next(error)
    })
})

app.post('/api/person', (req, res, next) => {
  const { name } = req.body
  const { number } = req.body

  const newPerson = new Person({
    name,
    number,
  })

  newPerson
    .save()
    .then(savedUser => savedUser.toJSON())
    .then(formatted => res.json(formatted))
    .catch(error => next(error))
})

app.put('/api/person/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const { name } = req.body
    const { number } = req.body

    const data = {
      name,
      number,
    }

    Person.findByIdAndUpdate(id, data, { new: true }).then((updatedPerson) => {
      res.json(updatedPerson.toJSON())
    })
  } catch (e) {
    next(e)
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
