import express from 'express';
import mogan from 'morgan';
import mongoose from 'mongoose';
import route from './routes/index.js'
import cors from 'cors'
//import dotenv from 'dotenv'

const DATABASE_URL = 'mongodb+srv://reviewfilm:b7EMQHRsTd8XmM5@cluster0.e2shl.mongodb.net/FilmReview?retryWrites=true&w=majority'

mongoose.connect(DATABASE_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Connection failed', err);
});

// Middleware
const app = express();
app.use(mogan('dev'));
app.use(express.json());
app.use(cors())

route(app)





const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:5000`);
});
