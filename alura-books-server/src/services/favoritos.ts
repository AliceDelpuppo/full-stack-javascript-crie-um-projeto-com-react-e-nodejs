import fs from 'fs'
import { Book } from './livros'

export function getFavoritosJson() {
	const favoritos = fs.readFileSync('favoritos.json', 'utf-8')
	return JSON.parse(favoritos)
}

export function excluiFavorito(id: string) {
	const oldBooks: Book[] = JSON.parse(fs.readFileSync('favoritos.json', 'utf-8'))

	const filteredBooks = oldBooks.filter((book) => {
		return book.id !== id
	})

	fs.writeFileSync('favoritos.json', JSON.stringify(filteredBooks))
}

export function insertNewFavorito(id: string) {
	const oldFavoritosBooks: Book[] = JSON.parse(fs.readFileSync('favoritos.json', 'utf-8'))
	const allBooks: Book[] = JSON.parse(fs.readFileSync('livros.json', 'utf-8'))

	const newBook = allBooks.find((book) => {
		return book.id === id
	})

	const newFavoritosList = [...oldFavoritosBooks, newBook]

	fs.writeFileSync('favoritos.json', JSON.stringify(newFavoritosList))
}
