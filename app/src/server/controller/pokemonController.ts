import { Request, Response, NextFunction } from 'express';
import { pokemonService } from '../../services';

const getLisPokemonByTypeController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { typeId } = req.params;

        typeId = !typeId ? '0' : typeId.toString();

        const pokemons = await pokemonService.getListPokemonByIdService(typeId);

        res.status(200).json(pokemons);
    } catch (error) {
        next(error);
    }
}

export { getLisPokemonByTypeController };
