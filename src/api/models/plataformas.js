const mongoose = require('mongoose')

const plataformaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    movies: [
      { type: mongoose.Types.ObjectId, ref: 'peliculas', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'plataformas'
  }
)

const Plataforma = mongoose.model('plataformas', plataformaSchema)

module.exports = Plataforma
