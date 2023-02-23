import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routerHello from '../pages/helloAPI';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Routers
app.use('/api', routerHello);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
}); 