const mongoose = require('mongoose')

const peliculaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    actors: { type: [String], required: true },
    category: {
      type: String,
      required: true,
      enum: [
        'Acción',
        'Aventura',
        'Catástrofe',
        'Ciencia Ficción',
        'Comedia',
        'Documentales',
        'Drama',
        'Fantasía',
        'Musicales',
        'Suspense',
        'Terror'
      ]
    }
  },
  {
    timestamps: true,
    collection: 'peliculas'
  }
)

const Pelicula = mongoose.model('peliculas', peliculaSchema)

module.exports = Pelicula
