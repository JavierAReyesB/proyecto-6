const Pelicula = require('../models/peliculas')

const getPeliculas = async (req, res, next) => {
  try {
    const peliculas = await Pelicula.find()
    return res.status(200).json(peliculas)
  } catch (error) {
    return res.status(400).json('Error en la solicitud peliculas')
  }
}

const getPeliculasById = async (req, res, next) => {
  try {
    const { id } = req.params
    const pelicula = await Pelicula.findById(id)
    return res.status(200).json(pelicula)
  } catch (error) {
    return res.status(400).json('Error en la solicitud id')
  }
}

const getPeliculasByCategory = async (req, res, next) => {
  try {
    const { category } = req.params
    const peliculas = await Pelicula.find({ category: category })
    return res.status(200).json(peliculas)
  } catch (error) {
    return res.status(400).json('Error en la solicitud category')
  }
}

const getPeliculasByActors = async (req, res, next) => {
  try {
    const { actor } = req.params
    const peliculas = await Pelicula.find({ actors: { $in: [actor] } })
    if (peliculas.length === 0) {
      return res
        .status(404)
        .json({
          message: 'No se encontraron películas para el actor proporcionado'
        })
    }
    return res.status(200).json(peliculas)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la solicitud actor', error })
  }
}

const postPelicula = async (req, res, next) => {
  try {
    const newPelicula = new Pelicula(req.body)
    const peliculaSaved = await newPelicula.save()
    return res.status(201).json(peliculaSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putPelicula = async (req, res, next) => {
  try {
    const { id } = req.params
    const newPelicula = new Pelicula(req.body)
    newPelicula._id = id
    const peliculaUpdated = await Pelicula.findByIdAndUpdate(id, newPelicula, {
      new: true
    })
    return res.status(200).json(peliculaUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud put')
  }
}

const deletePelicula = async (req, res, next) => {
  try {
    const { id } = req.params
    const peliculaDeleted = await Pelicula.findByIdAndDelete(id)
    return res.status(200).json(peliculaDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud delete')
  }
}

module.exports = {
  getPeliculas,
  getPeliculasById,
  getPeliculasByCategory,
  getPeliculasByActors,
  postPelicula,
  putPelicula,
  deletePelicula
}
