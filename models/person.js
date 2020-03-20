const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = process.env.MONGODB_URI;

console.log('connecting to: ', url);

mongoose
  .connect(url, { useNewUrlParser: true })
  .then((result) => console.log('connected to MongoAtlas'))
  .catch((error) => console.log(error));

const personSchema = new Schema({
  name: { type: String  },
  number: { type: String },
});

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});


module.exports = mongoose.model('Person', personSchema);
