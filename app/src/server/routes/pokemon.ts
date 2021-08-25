import { Router } from 'express';
import { getLisPokemonByTypeController } from '../controller/pokemonController';

const router: Router = Router();

router.get('/:typeId', getLisPokemonByTypeController);

export = router;