import express from 'express';
import mogan from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {Router} from "express";
import mongose from 'mongoose';

// Middleware
const app = express();
app.use(mogan('dev'));
app.use(express.json());
app.use(express.static('public'));

// get the current file path of project
const __dirname = dirname(fileURLToPath(import.meta.url));

const uri = 'mongodb+srv://reviewfilm:b7EMQHRsTd8XmM5@cluster0.e2shl.mongodb.net/FilmReview?retryWrites=true&w=majority'

mongose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:3000`);
});
