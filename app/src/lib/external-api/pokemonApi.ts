/// <reference path="./types.d.ts" />

import serviceManager from '../serviceManager';
import { server } from '../../config';

const getLisPokemonByType = async (typeId: string): Promise<myTypes.Pokemon> => {
    let result: myTypes.Pokemon;
    const { data, status } = await serviceManager.get(`${server.pokemonApiUrl}${typeId}`);
 
    result = parsePokemon(data);

    return result;
}


const parsePokemon = (data: myTypes.PokemonResponse) : myTypes.Pokemon => {
    return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        order: data.order,
    }
}

export { getLisPokemonByType };