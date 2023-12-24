# Cypress gerando dados dos testes em json e armazenando em uma planilha do Excel

## 🔖 Requisitos

- [Node.js] - versão 16+
- [Visual Studio Code] - versão 1.60+
- [Git] - 2.35+
- [Cypress] - versão 13.6.1
- [Library - cypress-json-results-non-blocking] - versão 0.4.1
- [Library - date-fns] - versão 3.0.6
- [Library - exceljs] - versão 4.4.0
- [Library - xlsx] - versão 0.18.5

## 💻  Instalação

Para rodar o projeto de automação de testes na sua máquina, clone o repositório e execute o comando `npm install` para instalar todas as dependências.

Em seguida, execute `npx cypress open` para abrir a interface do Cypress ou execute `npx cypress run` para rodar os testes em modo headless (terminal).

Após rodar todos os testes, execute `node cypress/scripts/json-to-excel.js` para rodar o script que pega os dados do arquivo .json e organiza os dados numa planilha do Excel.

## ✅  Resultado

<p align="center">Abaixo um exemplo do resultado no Excel</p>

<div align="center"><img width="600px"  src="https://github.com/mrk-qa/cypress-excel-report/assets/102618854/5e49e4b7-63c2-4421-8565-ae385bbc3eec">
</div>
