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
    const user = new User({ email: 'controller-test@email', firstName: 'firstName', lastName: 'LastName', address: '123 Fake Street', dateOfBirth: "2015-03-25" })
    console.log(user, "controller was hit")
    res.sendStatus(204)
})

export { router }