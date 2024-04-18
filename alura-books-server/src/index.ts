import express, { Request, Response } from 'express'
import routerBooks from './routes/livros'
import routerLancamentos from './routes/lancamentos'
import routerFavoritos from './routes/favoritos'
import cors from 'cors'

const app = express()

const port = 9000

// app.get('/', (request: Request, response: Response) => {
// 	response.send('asd')
// })

app.use(express.json())
// problemas com cors: npm install cors
app.use(cors({ origin: '*' }))

app.use('/livros', routerBooks)

app.use('/lancamentos', routerLancamentos)

app.use('/favoritos', routerFavoritos)

app.listen(port, () => {
	console.log(`Local: http://localhost:${port}/`)
})
