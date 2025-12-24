import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import { chatController } from './controllers/chat.controller';

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
   res.send(process.env.OPENAI_API_KEY);
});

app.get('/api/hello', (req: Request, res: Response) => {
   res.send({ message: 'Hello from Bun!' });
});

app.post('/api/chat', chatController.sendMessage);

app.listen(port, () => {
   console.log(`Hello Bun on port http://localhost:${port}`);
});
