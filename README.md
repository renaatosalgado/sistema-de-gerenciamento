## Teste 01

Rota: http://localhost:5000/processes/status?name=ativo

Nesta rota é possível filtrar pelo status do processo (inativo ou ativo).

## Teste 02

Rota: http://localhost:5000/processes/average?company=Empresa-A&state=rj

Nesta rota é possível filtrar os processos por empresas (Empresa-A ou Empresa-B) e estado (RJ, SP, MG ou AM).

## Teste 03

Rota: http://localhost:5000/processes/value?greaterThan=100000

Nesta rota é possível filtrar pelo valor do processo, retornando os que possuirem valor superior ao informado, em R$.

## Teste 04

Rota: http://localhost:5000/processes

Nesta rota todos os processos são listados, incluindo o estado do mesmo e também o estado da empresa.
Por isso, no teste, existe um filtro que define o mês a ser considerado para o sucesso do mesmo.

## Teste 05

Rota: http://localhost:5000/processes

Nesta rota todos os processos são listados, incluindo o estado do mesmo e também o estado da empresa.
Sendo assim, no teste existe a filtragem e verificação para relacionar o estado da empresa com o estado do processo e retornar os processos que são so mesmo estado da empresa.

## Teste 06

Rota: http://localhost:5000/processes/number?number=trab

Nesta rota é possível filtrar por qualquer string contendo parte do número do processo.



