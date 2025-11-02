import { Router } from "express"
import { validatePost } from "../middlewares/validatePost.js"
import {
    list,
    get,
    create,
    update,
    remove
} from "../controllers/posts.controller.js"

const router = Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', validatePost, create)
router.put('/:id', validatePost, update)
router.delete('/:id', remove)

export default router