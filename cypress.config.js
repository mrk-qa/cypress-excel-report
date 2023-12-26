const { defineConfig } = require('cypress')
const fs = require('fs')
const path = require('path')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      const caminhoArquivo = 'cypress/reports/results_tests.json'

      // Registro de tempo de início
      on('before:run', () => {
        // Limpar o arquivo antes de iniciar os testes
        fs.writeFileSync(path.resolve(caminhoArquivo), '')
      })

      // Registro de tempo de término e escrita do arquivo no final dos testes
      on('after:run', (results) => {
        const jsonFilePath = path.join(__dirname, caminhoArquivo)

        // Convertendo dados para formato JSON
        const dadosJSON = JSON.stringify(results, null, 2)

        // Escrevendo dados no arquivo
        fs.writeFileSync(jsonFilePath, dadosJSON)

        console.log(`Dados foram escritos em ${jsonFilePath}`)
      })

      return config
    },
  },
})
