import { Request, Response } from 'express'
import { excluiFavorito, getFavoritosJson, insertNewFavorito } from '../services/favoritos'

export function getFavoritos(request: Request, response: Response) {
	try {
		const books = getFavoritosJson()
		response.send(books)
	} catch (error) {
		response.status(500)
		response.send(error)
	}
}

export function postFavorito(request: Request, response: Response) {
	try {
		const id = request.params.id
		insertNewFavorito(id)
		response.status(201)
		response.send('Favorito inserido com sucesso')
	} catch (error) {
		response.status(400)
		response.send(error)
	}
}

export function deleteFavorito(request: Request, response: Response) {
	try {
		const id = request.params.id
		excluiFavorito(id)
		response.send('Favorito excluído com sucesso')
	} catch (error) {
		response.status(400)
		response.send(error)
	}
}
