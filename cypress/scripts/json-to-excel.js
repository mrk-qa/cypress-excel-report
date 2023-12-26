const ExcelJS = require('exceljs')
const fs = require('fs')
const { format } = require('date-fns')
const path = require('path')

const jsonData = JSON.parse(fs.readFileSync('cypress/reports/results_tests.json', 'utf8'))

const workbook = new ExcelJS.Workbook()
const worksheet = workbook.addWorksheet('Cypress Test Results')

worksheet.addRow([
  'Spec',
  'Title',
  'Status',
  'Duration (ms)',
  'Cypress Version',
  'Browser',
])

jsonData.runs.forEach((run) => {
  run.tests.forEach((test) => {
    worksheet.addRow([
      run.spec.relative,
      test.title.join(' '),
      test.state,
      test.duration,
      jsonData.cypressVersion,
      jsonData.browserName,
    ])
  })
})

worksheet.addRow([
  'Total Passed',
  'Total Failed',
  'Total Duration',
  'Total Tests',
])

worksheet.addRow([
  jsonData.totalPassed,
  jsonData.totalFailed,
  jsonData.totalDuration,
  jsonData.totalTests,
])

const currentDate = format(new Date(), 'dd-MM-yyyy')

const excelFilePath = path.join('cypress', 'reports', `cypress_results_${currentDate}.xlsx`)

workbook.xlsx.writeFile(excelFilePath)
  .then(() => {
    console.log(`Planilha salva com sucesso: ${excelFilePath}`)
  })
  .catch((err) => {
    console.error('Erro ao salvar a planilha:', err)
  })
