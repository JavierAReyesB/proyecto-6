const {
  getPlataformas,
  getPlataformasById,
  postPlataforma,
  putPlataforma,
  deletePlataforma
} = require('../controllers/plataformas')

const plataformasRouter = require('express').Router()

plataformasRouter.get('/:id', getPlataformasById)
plataformasRouter.get('/', getPlataformas)
plataformasRouter.post('/', postPlataforma)
plataformasRouter.put('/:id', putPlataforma)
plataformasRouter.delete('/:id', deletePlataforma)

module.exports = plataformasRouter
