import { Router } from 'express'

const router = Router()

router.get("/:id", (req, res) => {
    const id = req.params.id
    console.log("userControllerTest", id)
    res.sendStatus(204)
})

module.exports = router