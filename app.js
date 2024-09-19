import express, { urlencoded } from 'express';
import { connectDB } from './db.js';
import apiRoutes from './routes/allRoutes.js';
import { config } from 'dotenv';
import cors from 'cors'
import loginRouter from './routes/loginRoute.js';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  config();
}

app.use(cors())


app.use(express.json());
app.use(urlencoded({ extended: false }));
connectDB();

app.get('/', async (req, res, next) => {
  res.send({ message: 'Awesome it works 🐻' });
});


app.use('/api', loginRouter);
app.use('/api', apiRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
}
);
