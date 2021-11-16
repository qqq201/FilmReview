import express from 'express';
import mogan from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {Router} from "express";


const app = express();
app.use(mogan('dev'));
app.use(express.json());
app.use(express.static('public'));

// get the current file path of project
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile('/Users/lucky/FilmReview/index.html');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:3000`);
});
