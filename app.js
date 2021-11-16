import express from 'express';
import mogan from 'morgan';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {Router} from "express";
import mongoose from 'mongoose';
import * as path from "path";
// get the current file path of project
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware
const app = express();
app.use(mogan('dev'));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


app.use(express.static('public'));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const uri = 'mongodb+srv://reviewfilm:b7EMQHRsTd8XmM5@cluster0.e2shl.mongodb.net/FilmReview?retryWrites=true&w=majority'

mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Connection failed', err);
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    email: String,
    city: String,
    role: String
});


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

// getPerson();

const port = process.env.PORT || 3000;

// app.get('./public/css/styles.css', (req, res) => {
//     res.sendFile("/public/css/styles.css");
// })

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:3000`);
});
