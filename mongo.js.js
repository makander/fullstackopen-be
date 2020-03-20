const mongoose = require('mongoose');


if ( process.argv.length < 1 ) {
  console.log('give password as argument')
  process.exit(1)
}


const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]
const url =`mongodb+srv://fullstack:${password}@cluster0-ir6hs.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
name: String,
number: String,
});
const Person = mongoose.model('Person', personSchema)



Person.find({}).then(result => {
     console.log('phonebook: ')
  result.forEach(p => {
    console.log(p.name, p.number)
  })
  mongoose.connection.close()
})

if (process.argv.length > 3) {
    

    const newPerson = new Person({
        name: name,
        number: number
    });
  
    newPerson.save()
        .then((savedUser) => {
            console.log('added: ' + savedUser.name + ' ' + savedUser.number + ' to Phonebook')
            mongoose.connection.close()
        })
        .catch((error) => console.log(error));
}
