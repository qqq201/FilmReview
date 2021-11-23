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
*/

export default async function getPerson(name) {
    const Person = mongoose.model('Person', personSchema);
    return await Person.find({name: name}).limit(1);
}
