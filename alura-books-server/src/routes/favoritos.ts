import { Router } from 'express'
import { deleteFavorito, getFavoritos, postFavorito } from '../controllers/favoritos'

const routerFavoritos = Router()

routerFavoritos.get('/', getFavoritos)

routerFavoritos.delete('/:id', deleteFavorito)

routerFavoritos.post('/:id', postFavorito)

export default routerFavoritos
