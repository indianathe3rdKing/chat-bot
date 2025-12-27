import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(
   cors({
      origin: [
         'http://localhost:5173',
         'https://chat-bot-1-rv89.onrender.com',
         'https://chat-bot-pied-nine.vercel.app',
      ],
      credentials: true,
   })
);
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Hello Bun on port http://localhost:${port}`);
});
