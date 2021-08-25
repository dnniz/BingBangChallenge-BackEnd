/// <reference path="./types.d.ts" />

import { pokemonApi } from '../lib';

 const getListPokemonByIdService = async (typeId: string): Promise<serviceType.Pokemon> => {

    const pokemons: serviceType.Pokemon = await pokemonApi.getLisPokemonByType(typeId);

    return pokemons;
 }

 export = { getListPokemonByIdService };