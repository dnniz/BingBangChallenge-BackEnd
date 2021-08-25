declare namespace myTypes {
    
    export type Pokemon = {
        id: number,
        name: string,
        height: number,
        weight: number,
        order: number,
    };
    export type PokemonResponse = {
        abilities: any[],
          base_experience: number,
          forms: any[],
          game_indices: any[],
          height: number,
          held_items: [],
          id: number,
          is_default: boolean,
          location_area_encounters: string,
          moves: any[],
          name: string,
          order: number,
          past_types: [],
          species: any,
          sprites: any,
          stats: any[],
          types: any[],
          weight: number
    };
    export type PokemonQueryFilter = {
        TypeId : string;
    };
}