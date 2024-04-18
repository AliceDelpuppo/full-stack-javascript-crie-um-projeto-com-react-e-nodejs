import fs from 'fs'

export function getLancamentosJson() {
	const books = fs.readFileSync('lancamentos.json', 'utf-8')
	return JSON.parse(books)
}
