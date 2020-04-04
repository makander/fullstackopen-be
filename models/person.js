const mongoose = require('mongoose')
const Schema = mongoose.Schema
const url = process.env.MONGODB_URI
const uniqueValidator = require('mongoose-unique-validator')
console.log('connecting to: ', url)

mongoose
  .connect(url, { useNewUrlParser: true,   useUnifiedTopology: true, useCreateIndex: true  })
  .then(() => console.log('connected to MongoAtlas'))
  .catch((error) => console.log('MONGOOSE ERRROR',error))

const personSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    unique: true },
  number: {
    type: String,
    minlength: 8 },
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})


module.exports = mongoose.model('Person', personSchema)
