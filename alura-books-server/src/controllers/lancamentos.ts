import { Request, Response } from 'express'
import { getLancamentosJson } from '../services/lancamentos'

export function getLancamentos(request: Request, response: Response) {
	try {
		const books = getLancamentosJson()
		response.send(books)
	} catch (error) {
		response.status(500)
		response.send(error)
	}
}
