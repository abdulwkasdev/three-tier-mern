import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to the Book Registry');
});

app.use('/api', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App is connected to DB. yeah !!.');
    app.listen(PORT, () => {
      console.log(`App is listening to the port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });