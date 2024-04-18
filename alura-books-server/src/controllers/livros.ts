import { Request, Response } from 'express'
import { editBook, excluiBook, getAllBooksJson, getBookByIdJson, insertNewBook } from '../services/livros'

export function getBooks(request: Request, response: Response) {
	try {
		// throw new Error('teste de erro')
		const books = getAllBooksJson()
		response.send(books)
	} catch (error) {
		response.status(500)
		response.send(error)
	}
}

export function getBook(request: Request, response: Response) {
	try {
		const id = request.params.id
		if (!id || !Number(id)) {
			response.status(422)
			response.send('ID inválido')
		} else {
			const book = getBookByIdJson(id)
			response.send(book)
		}
	} catch (error) {
		response.status(500)
		response.send(error)
	}
}

export function postBook(request: Request, response: Response) {
	try {
		const newBook = request.body
		insertNewBook(newBook)
		response.status(201)
		response.send('Livro(s) inserido com sucesso')
	} catch (error) {
		response.status(400)
		response.send(error)
	}
}

export function patchBook(request: Request, response: Response) {
	try {
		const id = request.params.id
		const modifications = request.body
		editBook(modifications, id)
		response.send('Livro editado com sucesso')
	} catch (error) {
		response.status(400)
		response.send(error)
	}
}

export function deleteBook(request: Request, response: Response) {
	try {
		const id = request.params.id
		excluiBook(id)
		response.send('Livro excluído com sucesso')
	} catch (error) {
		response.status(400)
		response.send(error)
	}
}
