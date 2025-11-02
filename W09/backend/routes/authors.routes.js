import { Router } from "express"
import { validateAuthor } from "../middlewares/validateAuthor.js"
import {
    list,
    get,
    create,
    update,
    remove
} from "../controllers/authors.controller.js"

const router = Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', validateAuthor, create)
router.put('/:id', validateAuthor, update)
router.delete('/:id', remove)

export default router