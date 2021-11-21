import mongoose from 'mongoose'

const personSchema = new mongoose.Schema({
    name: String,
    password: String,
    age: Number,
    gender: String,
    email: String,
    city: String,
    role: String
});

/*
async function createPerson() {
    const Person = mongoose.model('Person', personSchema);
    const person = new Person({
        name: 'Nguyễn Nguyễn',
        email: 'Ng@gmail.com',
        gender: 'Nam',
        age: 23,
        city: 'HCM city',
        role: 'user'
    });

    const result = await person.save();
    console.log(result);
}

async function getPerson() {
    const Person = mongoose.model('Person', personSchema);
    const person = await Person.find({name: 'Nguyễn Nguyễn'}).limit(1).sort({age: -1});
    console.log(person);
}
*/


export default mongoose.model('users', personSchema)
