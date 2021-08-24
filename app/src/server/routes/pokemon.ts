import { Request, Response } from 'express';

const pokemon = (req: Request, res: Response) => {
    res.send('API POKEMON')
};

export default pokemon;