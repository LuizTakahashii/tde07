const express = require("express")
const router = express.Router()


let tasks = [
    {
        id: 1,
        name: "Comprar leite",
        descrição: "ir no mercado para comprar leite",
        isDone : false

    }
]


router.get("/tasks", (req , res ) => {
    res.json(tasks)
})

router.post("/tasks", (req, res) => {
    const { id, name, descrição, isDone } = req.body
    tasks.push({ id, name, descrição, isDone })
    res.status(201).send()
}
)



router.put("/tasks/:id", (req, res) => {
    const { id } = req.params
    const { name, descrição, isDone } = req.body
    const task = tasks.find(task => task.id == id)
    task.name = name
    task.descrição = descrição
    task.isDone = isDone
    res.send()
}
)



router.delete("/tasks/:id", (req, res) => {
    const { id } = req.params
    tasks = tasks.filter(task => task.id != id)
    res.send()
}
)

[
    {
        "id": 1,
        "name": "Comprar leite",
        "descrição": "ir no mercado para comprar leite",
        "isDone": falses
    }
]
module.exports = { router }


