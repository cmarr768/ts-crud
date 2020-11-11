import { Router } from 'express'
import { User } from "../models/user"

const router = Router()

router.get("/:id", (req, res) => {
    const id = req.params.id
    console.log("userControllerTest", id)
    res.send({
        id
    })
})

router.post("/", (req, res) => {
    const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        dateOfBirth: req.body.dateOfBirth
    })
    res.status(200).send(
        user
    )

})

export { router }