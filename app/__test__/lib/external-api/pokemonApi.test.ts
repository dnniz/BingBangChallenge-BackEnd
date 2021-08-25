import { getLisPokemonByType } from '../../../src/lib/external-api/pokemonApi';
import serviceManager from '../../../src/lib/serviceManager';


describe('Pokemon from external API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });

    it('Get detail from Pokemon', async () => {
        const mockResponse = {
            data: {
                id: 266,
                name: 'silcoon',
                height: 6,
                weight: 100,
                order: 348
        },
            status: 200
        };

        const req = <any>serviceManager.get;
        jest.fn().mockResolvedValue(mockResponse);
             
        const response = await getLisPokemonByType('266');  

        expect(response).toEqual(mockResponse.data);
    })
})