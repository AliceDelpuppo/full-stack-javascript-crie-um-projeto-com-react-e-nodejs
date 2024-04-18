import fs from 'fs'

export interface Book {
	url: string
	srcImg: string
	name: string
	id: string
}

export function getAllBooksJson() {
	const books = fs.readFileSync('livros.json', 'utf-8')
	return JSON.parse(books)
}

export function getBookByIdJson(id: string) {
	const books: Book[] = JSON.parse(fs.readFileSync('livros.json').toString())
	return books.find((book) => {
		return book.id === id
	})
}

export function insertNewBook(newBook: Book[]) {
	const oldBooks = JSON.parse(fs.readFileSync('livros.json', 'utf-8'))
	const newBooksList = [...oldBooks, ...newBook]
	fs.writeFileSync('livros.json', JSON.stringify(newBooksList))
}

export function editBook(modifications: any, id: string) {
	const oldBooks: Book[] = JSON.parse(fs.readFileSync('livros.json', 'utf-8'))

	const newBooksList = oldBooks.map((book) => {
		if (book.id === id) {
			const bookModificado = { ...book, ...modifications }

			return bookModificado
		}
		return { ...book }
	})

	fs.writeFileSync('livros.json', JSON.stringify(newBooksList))
}

export function excluiBook(id: string) {
	const oldBooks: Book[] = JSON.parse(fs.readFileSync('livros.json', 'utf-8'))

	const filteredBooks = oldBooks.filter((book) => {
		return book.id !== id
	})

	fs.writeFileSync('livros.json', JSON.stringify(filteredBooks))
}
