const Plataforma = require('../models/plataformas')

const getPlataformas = async (req, res, next) => {
  try {
    const plataformas = await Plataforma.find().populate('movies')
    return res.status(200).json(plataformas)
  } catch (error) {
    return res.status(400).json('Error en la solicitud plataformas')
  }
}

const getPlataformasById = async (req, res, next) => {
  try {
    const { id } = req.params
    const plataforma = await Plataforma.findById(id).populate('movies')
    return res.status(200).json(plataforma)
  } catch (error) {
    return res.status(400).json('Error en la solicitud id plataformas')
  }
}

const postPlataforma = async (req, res, next) => {
  try {
    const newPlataforma = new Plataforma(req.body)
    const plataformaSaved = await newPlataforma.save()
    return res.status(201).json(plataformaSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putPlataforma = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldPlataforma = await Plataforma.findById(id)

    // Combinar las películas actuales con las nuevas sin duplicados
    const updatedMovies = [
      ...new Set([
        ...oldPlataforma.movies.map(String),
        ...(req.body.movies || [])
      ])
    ]

    const updatedData = {
      ...req.body,
      movies: updatedMovies // Actualizamos el array movies eliminando duplicados
    }

    const plataformaUpdated = await Plataforma.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    )
    return res.status(200).json(plataformaUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud put')
  }
}

const deletePlataforma = async (req, res, next) => {
  try {
    const { id } = req.params
    const plataformaDeleted = await Plataforma.findByIdAndDelete(id)
    return res.status(200).json(plataformaDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud delete')
  }
}

module.exports = {
  getPlataformas,
  getPlataformasById,
  postPlataforma,
  putPlataforma,
  deletePlataforma
}
