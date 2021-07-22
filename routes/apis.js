import { Router } from 'express'
const router = Router()

import * as coffeeCtrl from '../controllers/coffees.js'


router.get('/coffees', coffeeCtrl.index)
router.get('/coffees/:id', coffeeCtrl.show)
router.post('/coffees', coffeeCtrl.create)
router.put('/coffees/:id', coffeeCtrl.update)
router.delete('/coffees/:id', coffeeCtrl.delete)

export {
  router
}
