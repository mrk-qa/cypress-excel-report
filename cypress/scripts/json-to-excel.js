const ExcelJS = require('exceljs');
const fs = require('fs');
const { format } = require('date-fns');
const path = require('path');

// Construa o caminho relativo para o arquivo JSON
const caminhoArquivoJson = path.join('cypress', 'reports', 'results_tests.json');

// Verifique se o arquivo JSON existe
if (!fs.existsSync(caminhoArquivoJson)) {
  console.error(`O arquivo JSON não foi encontrado: ${caminhoArquivoJson}`);
  process.exit(1); // Encerre o script com um código de erro
}

const jsonData = JSON.parse(fs.readFileSync(caminhoArquivoJson, 'utf8'));

const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Cypress Test Results');

worksheet.addRow([
  'Spec',
  'Title',
  'Status',
  'Duration (ms)',
  'Cypress Version',
  'Browser',
]);

jsonData.runs.forEach((run) => {
  run.tests.forEach((test) => {
    worksheet.addRow([
      run.spec.relative,
      test.title.join(' '),
      test.state,
      test.duration,
      jsonData.cypressVersion,
      jsonData.browserName,
    ]);
  });
});

worksheet.addRow([
  'Total Passed',
  'Total Failed',
  'Total Duration',
  'Total Tests',
]);

worksheet.addRow([
  jsonData.totalPassed,
  jsonData.totalFailed,
  jsonData.totalDuration,
  jsonData.totalTests,
]);

const currentDate = format(new Date(), 'dd-MM-yyyy');

const excelFilePath = path.join('cypress', 'reports', `cypress_results_${currentDate}.xlsx`);

workbook.xlsx.writeFile(excelFilePath)
  .then(() => {
    console.log(`Planilha salva com sucesso: ${excelFilePath}`);
  })
  .catch((err) => {
    console.error('Erro ao salvar a planilha:', err);
  });
