import { pokemonService } from './../../src/services/';


describe('Pokemon Service', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })

    describe('Pokemon Detail Service', () => {
        it('Should return a detail of pokemon', async () => {
            
            const pokemonId = Math.floor(Math.random() * (850 - 1 + 1)) + 1;

            const response = await pokemonService.getListPokemonByIdService(pokemonId.toString()); 

            expect(response).toBeTruthy();
        })
    })
})

