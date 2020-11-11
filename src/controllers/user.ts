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
    const {
        email,
        firstName,
        lastName,
        address,
        dateOfBirth
    } = req.body;

    const user = new User({
        email,
        firstName,
        lastName,
        address,
        dateOfBirth
    });
    res.status(200).send(
        user
    )

})

export { router }