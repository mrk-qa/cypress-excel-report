const fs = require('fs')
const path = require('path')
const XLSX = require('xlsx')
const { format } = require('date-fns')

// Caminho para o arquivo JSON
const jsonFilePath = 'cypress/reports/results_tests.json'

// Verifica se o arquivo JSON existe
if (!fs.existsSync(jsonFilePath)) {
  console.error(`O arquivo ${jsonFilePath} não foi encontrado.`)
  process.exit(1)
}

// Lê os dados do arquivo JSON
const jsonData = require(path.resolve(jsonFilePath))

// Função para organizar os dados em um formato adequado para o xlsx
function organizeData(jsonData) {
  const organizedData = []

  // Cabeçalho
  const header = ['File', 'Scenario', 'Status', 'Duration']
  organizedData.push(header)

  // Itera sobre os resultados
  for (const result of jsonData.results) {
    organizedData.push([result.feature, result.scenario, result.state, result.duration])
  }

  return organizedData
}

// Função para criar um arquivo Excel local
function createLocalExcelFile(data, outputPath) {
  // Cria uma nova planilha
  const ws = XLSX.utils.aoa_to_sheet(data)

  // Cria um livro de trabalho
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'Test Results')

  // Gera o nome do arquivo com a data atual
  const currentDate = format(new Date(), 'dd-MM-yyyy-HH-mm')
  const excelOutputPath = `${outputPath}/results_output_${currentDate}.xlsx`

  // Salva o arquivo localmente
  XLSX.writeFile(wb, excelOutputPath)

  console.log(`O arquivo Excel foi criado em: ${excelOutputPath}`)
}

// Organiza os dados
const organizedData = organizeData(jsonData)

// Define o caminho de saída para o arquivo Excel local
const excelOutputPath = 'cypress/reports'

// Cria o arquivo Excel local
createLocalExcelFile(organizedData, excelOutputPath)