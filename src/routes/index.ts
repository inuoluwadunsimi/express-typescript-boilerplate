import express from 'express'
import {routeError} from '../handlers'


import { MainApiValidator } from '../middlewares/openapi.validator'

const router: express.Router = express.Router();


router.use('/',MainApiValidator)

router.use('/health',(req,res)=>{
    res.send({status:'OK'})
})

router.use(routeError)

export default router