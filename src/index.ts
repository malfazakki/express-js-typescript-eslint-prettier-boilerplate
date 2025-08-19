import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
  console.log('Response Sent');
});

app.listen(port, () => {
  console.log(`APP Running on Port ${port}`);
});
