import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
    Coffee
}

const coffeeSchema = new Schema({
    name: String,
    roast: String,
    origin: String,
    price: Number
}, {
    timestamps: true
})

const Coffee = mongoose.model('Coffee', coffeeSchema)