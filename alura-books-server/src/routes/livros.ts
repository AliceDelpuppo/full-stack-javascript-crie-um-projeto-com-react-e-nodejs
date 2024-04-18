import { Router } from 'express'
import { deleteBook, getBook, getBooks, patchBook, postBook } from '../controllers/livros'

const routerBooks = Router()

routerBooks.get('/', getBooks)

routerBooks.get('/:id', getBook)

routerBooks.post('/', postBook)

routerBooks.patch('/:id', patchBook)

routerBooks.delete('/:id', deleteBook)

export default routerBooks
