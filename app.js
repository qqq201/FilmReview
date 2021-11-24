import express from 'express';
import mogan from 'morgan';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import mongoose from 'mongoose';
import * as path from "path";
import {userModel} from './server/models/user.js'

import route from './server/routes/index.js'


// get the current file path of project
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware
const app = express();
app.use(mogan('dev'));
app.use(express.json());




app.use(express.static('public'));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// route(app)

const uri = 'mongodb+srv://reviewfilm:b7EMQHRsTd8XmM5@cluster0.e2shl.mongodb.net/FilmReview?retryWrites=true&w=majority'


mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Connection failed', err);
});



async function getPerson() {

    const User = userModel;
    const person = await User.find({name: 'Nguyễn Nguyễn'}).limit(1).sort({age: -1});
    console.log(person);
}

getPerson();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:3000`);
});
