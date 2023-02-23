// Ejemplo del uso de rutas junto con Router

import express, { Request, Response, Router } from 'express';

const routerHello:Router = express.Router();
routerHello.use(express.json());

routerHello.get('/hello', (req:Request, res:Response) => {
    res.json({
        hello: "Hello World with API"
    });
});

export default routerHello