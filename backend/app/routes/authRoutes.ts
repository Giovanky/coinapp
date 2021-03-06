import {Router} from 'express'
import {authController} from '../controllers/authController'

const router: Router = Router()

router.post('/signin', authController.signin)

router.post('/signup', authController.signup)

export default router
