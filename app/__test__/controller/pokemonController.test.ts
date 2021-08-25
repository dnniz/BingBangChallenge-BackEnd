import httpContext from 'express-http-context';
import { pokemonService } from './../../src/services';
import { getLisPokemonByTypeController } from '../../src/server/controller/pokemonController';
import { NextFunction, Response, Request } from 'express';

jest.mock('../../src/services');
jest.mock('express-http-context');

describe('Pokemon from external API', () => {
    const httpContextGetMock = <jest.Mock>httpContext.get;
    const jsonMock = jest.fn();
    const statusMock = jest.fn();
    const nextMock = jest.fn();
    const resMock : any = {
        status: statusMock.mockImplementation(() => ({
            json: jsonMock,
        }))
    }

    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    })

    describe('Pokemon Detail Controller', () => {
        it('Should fetch a detail of pokemon by id', async () => {
            const mockResponse = {
                id: 266, 
                name: 'silcoon',
                height: 6,
                weight: 100,
                order: 348
            };

            const mockRequest = {
                params: {
                    typeId: 266
                },
            } as unknown;

            httpContextGetMock.mockImplementation(() => '266');
            
            const serviceMock = <jest.Mock>pokemonService.getListPokemonByIdService;
            serviceMock.mockReturnValue(mockResponse);

            await getLisPokemonByTypeController( mockRequest as Request, resMock as Response, nextMock as NextFunction);
        
            expect(statusMock).toHaveBeenCalledWith(200);
            expect(jsonMock).toHaveBeenCalledWith(mockResponse);
        })
    })
})