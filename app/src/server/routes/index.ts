import { Router } from 'express';
import pokemon from './pokemon';

const router: Router = Router();

router.use('/pokemon', pokemon);
router.get('/', (req, res) =>{
    res.json({ hello: 'hello world' });
});

export = router;