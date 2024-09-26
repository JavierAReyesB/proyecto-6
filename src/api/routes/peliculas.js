const {
  getPeliculas,
  getPeliculasById,
  getPeliculasByCategory,
  getPeliculasByActors,
  postPelicula,
  putPelicula,
  deletePelicula
} = require('../controllers/peliculas')

const peliculasRouter = require('express').Router()

peliculasRouter.get('/actor/:actor', getPeliculasByActors)
peliculasRouter.get('/category/:category', getPeliculasByCategory)
peliculasRouter.get('/:id', getPeliculasById)
peliculasRouter.get('/', getPeliculas)
peliculasRouter.post('/', postPelicula)
peliculasRouter.put('/:id', putPelicula)
peliculasRouter.delete('/:id', deletePelicula)

module.exports = peliculasRouter
