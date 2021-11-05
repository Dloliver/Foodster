const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    unsoldGoods: String,
    image: String,
    price: String,
    curbsidePickup: Boolean
  }
)

const Foods = mongoose.model('Food', foodSchema)

module.exports = Foods;
