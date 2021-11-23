import express from 'express';
import mogan from 'morgan';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {Router} from "express";
import mongoose from 'mongoose';
import * as path from "path";
import route from './routes/index.js'
import dotenv from 'dotenv'
import cors from 'cors'

const DATABASE_URL = 'mongodb+srv://reviewfilm:b7EMQHRsTd8XmM5@cluster0.e2shl.mongodb.net/FilmReview?retryWrites=true&w=majority'

// get the current file path of project
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware
const app = express();
app.use(mogan('dev'));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));
app.use(cors())

route(app)

mongoose.connect(DATABASE_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Connection failed', err);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:5000`);
});
