import supertest from "supertest";
import app from "../src/app.js";
import dayjs from "dayjs";

const server = supertest(app);

describe('Teste 01', () => {
    it('Calcular a soma dos processos ativos. A aplicação deve retornar R$ 1.087.000,00.', async () => {

        //com a variável 'status' pode-se escolher o status a ser filtrado (ativo ou inativo)
        const status = "ativo";
        let sum = 0;

        const response = await server.get(`/processes/status?name=${status}`);

        //a cada iteração a variável 'sum' é incrementada com o valor do processo, em R$
        response.body.forEach((process: { value: number }) => {
            sum += process.value
        })

        expect(sum).toBe(1087000);
        expect(response.status).toBe(200);
    });
});

describe('Teste 02', () => {
    it('Calcular a média do valor dos processos no Rio de Janeiro para o Cliente "Empresa A". A aplicação deve retornar R$ 110.000,00.', async () => {

        //as variáveis 'company' e 'state' podem ser usadas para filtrar qualquer nome de companhia ou nome de estado
        const company = "Empresa-A";
        const state = 'RJ';
        let sum = 0

        const response = await server.get(`/processes/average?company=${company}&state=${state}`);

        //a cada iteração a variável 'sum' é incrementada com o valor do processo, em R$
        response.body.forEach((process: { value: number }) => {
            sum += process.value
        });

        /* ao final, a variável 'sum' contém o valor total de processos, com o qual é realizada a média simples, 
        considerando o número de processos filtrados para tal empresa e tal estado */
        const average = sum / response.body.length;

        expect(average).toBe(110000);
        expect(response.status).toBe(200);
    });
});

describe('Teste 03', () => {
    it('Calcular o Número de processos com valor acima de R$ 100.000,00. A aplicação deve retornar 2.', async () => {

        //a variável 'value' estabelece o valor mínimo para o filtro por valor de processo, em R$
        const value = 100000;

        const response = await server.get(`/processes/value?greaterThan=${value}`);

        //ao final, conta-se quantos objetos foram retornados da requisição com tal filtro de valor
        expect(response.body).toHaveLength(2);
        expect(response.status).toBe(200);
    });
});

describe('Teste 04', () => {
    it('Obter a lista de Processos de Setembro de 2007. A aplicação deve retornar uma lista com somente o Processo “00010TRABAM”', async () => {

        //a variável 'month' considera os meses do ano, de 1 a 12, e serve como referência para o filtro
        const month = 9;

        const response = await server.get('/processes');

        /* filtra dentre todos os processos apenas aquele no qual o mês é igual à variável 'month'
        o +1 é devido ao fato de a lib dayjs contar os meses de 0 a 11 */
        const filteredProcesses = response.body.filter((process: { date: dayjs.Dayjs; }) => (dayjs(process.date).month() + 1) === month);

        expect(filteredProcesses[0].number).toBe('00010TRABAM');
        expect(response.status).toBe(200);
    });
});

describe('Teste 05', () => {
    it('Obter a lista de processos no mesmo estado do cliente, para cada um dos clientes. A aplicação deve retornar uma lista com os processos de número “00001CIVELRJ”,”00004CIVELRJ” para o Cliente "Empresa A" e “00008CIVELSP”,”00009CIVELSP” para o o Cliente "Empresa B".', async () => {

        /*  */
        const companyA = 'Empresa-A';
        const companyAProcessesNumber: string[] = [];
        const companyB = 'Empresa-B';
        const companyBProcessesNumber: string[] = [];


        const response = await server.get('/processes');

        const companyAProcesses = response.body.filter((process: { company: { name: string; stateId: number; }; stateId: number; }) => process.company.name === companyA && process.company.stateId === process.stateId);
        companyAProcesses.forEach((process: { number: any; }) => companyAProcessesNumber.push(process.number))

        const companyBProcesses = response.body.filter((process: { company: { name: string; stateId: number; }; stateId: number; }) => process.company.name === companyB && process.company.stateId === process.stateId);
        companyBProcesses.forEach((process: { number: any; }) => companyBProcessesNumber.push(process.number))

        expect(companyAProcessesNumber).toEqual(['00001CIVELRJ', '00004CIVELRJ']);
        expect(companyBProcessesNumber).toEqual(['00008CIVELSP', '00009CIVELSP']);
        expect(response.status).toBe(200);
    })
})