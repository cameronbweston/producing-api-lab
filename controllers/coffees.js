import { Coffee } from '../models/coffees.js'

export {
    index,
    show,
    create,
    update,
    deleteCoffee as delete
}

function index(req, res) {
    Coffee.find({})
    .then(coffees => {
        res.json(coffees)
    })
    .catch(err => {
        res.json(err)
    })
}

function show(req, res) {
    Coffee.findById(req.params.id)
    .then(coffee => {
        res.json(coffee)
    })
    .catch(err => {
        res.json(err)
    })
}

function create(req, res) {
    Coffee.create(req.body)
    .then(coffee => {
        res.json(coffee)
    })
    .catch(err => {
        res.json(err)
    })
}

function update(req, res) {
    Coffee.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(coffee => {
        res.json(coffee)
    })
}

function deleteCoffee(req, res) {
    Coffee.findByIdAndDelete(req.params.id) 
    .then(coffee => {
        res.json(coffee)
    })
}

