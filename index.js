require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const peliculasRouter = require('./src/api/routes/peliculas')
const plataformasRouter = require('./src/api/routes/plataformas')

const app = express()

app.use(express.json())

connectDB()

app.use('/api/v1/plataformas', plataformasRouter)
app.use('/api/v1/peliculas', peliculasRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
