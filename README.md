# Cypress gerando dados dos testes em json, armazenando em uma planilha do Excel e enviando os artefatos via Microsoft Teams

#### Resumo do funcionamento:

> Os testes são executados pelo Cypress que gera os dados dos testes em um arquivo .json
> É executado um script node.js que lê os dados .json e armazena em uma planilha do Excel
> Após a geração da planilha, roda o step de uma actions para armazenar os artefatos de cada execução na pipeline
> Em seguida, roda o step de uma actions que integra com o Microsoft Teams e anexa o link que da acesso aos artefatos da pipeline e envia uma notificação
> Esse processo da pipeline roda semanalmente através de um cron

## 🔖 Requisitos

- [Node.js] - versão 16+
- [Visual Studio Code] - versão 1.60+
- [Git] - 2.35+
- [Cypress] - versão 13.6.1
- [Library - date-fns] - versão 3.0.6
- [Library - exceljs] - versão 4.4.0
- [Library - xlsx] - versão 0.18.5

## 💻  Instalação

Para rodar o projeto de automação de testes na sua máquina, clone o repositório e execute o comando `npm install` para instalar todas as dependências.

Em seguida, execute `npx cypress open` para abrir a interface do Cypress ou execute `npx cypress run` para rodar os testes em modo headless (terminal).

Após rodar todos os testes, execute `node cypress/scripts/json-to-excel.js` para rodar o script que pega os dados do arquivo .json e organiza os dados numa planilha do Excel.

## ✅  Resultado

<p align="center">Um exemplo do resultado no Excel</p>

<div align="center"><img width="800px"  src="https://github.com/mrk-qa/cypress-excel-report-with-teams/blob/53cd08f09b503581bb9e6061bf8a896b56dc4116/assets/report-excel.png">
</div></br>

<p align="center">Um exemplo do resultado no Teams</p>

<div align="center"><img width="800px"  src="https://github.com/mrk-qa/cypress-excel-report-with-teams/blob/53cd08f09b503581bb9e6061bf8a896b56dc4116/assets/report-teams.png">
</div>

## 🔮 Apoie este projeto  

Se você deseja apoiar este projeto, deixe um ⭐.  

---  

Feito com 💙 &nbsp;por Marco Antonio 👋 &nbsp; [Meu LinkedIn](https://www.linkedin.com/in/mrk-silva/)  