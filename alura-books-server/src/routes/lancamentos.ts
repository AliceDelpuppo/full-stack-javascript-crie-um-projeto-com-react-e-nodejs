import { Router } from 'express'
import { getLancamentos } from '../controllers/lancamentos'

const routerLancamentos = Router()

routerLancamentos.get('/', getLancamentos)

export default routerLancamentos
