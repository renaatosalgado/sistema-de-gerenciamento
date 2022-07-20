import supertest from "supertest";
import app from "../src/app.js";

const server = supertest(app);

describe('Teste 01', () => {
    it('Calcular a soma dos processos ativos. A aplicação deve retornar R$ 1.087.000,00.', async () => {

        const status = "ativo";
        let sum = 0;

        const response = await server.get(`/processes/status?name=${status}`);

        response.body.forEach((process: { value: number }) => {
            sum += process.value
        })

        expect(sum).toBe(1087000);
        expect(response.status).toBe(200);
    });
});

describe('Teste 02', () => {
    it('Calcular a média do valor dos processos no Rio de Janeiro para o Cliente "Empresa A". A aplicação deve retornar R$ 110.000,00.', async () => {

        const company = "A";
        const state = 'RJ';
        let sum = 0

        const response = await server.get(`/processes/average?company=${company}&state=${state}`);

        response.body.forEach((process: { value: number }) => {
            sum += process.value
        })

        const average = sum / response.body.length;

        expect(average).toBe(110000);
        expect(response.status).toBe(200);
    })
})