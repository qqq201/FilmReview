import express from 'express';
import mogan from 'morgan';
import {Router} from "express";

const app = express();
app.use(mogan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('/Users/lucky/FilmReview/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:3000`);
});
