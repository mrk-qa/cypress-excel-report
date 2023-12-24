const { defineConfig } = require('cypress')
const CypressReport = require('cypress-json-results-non-blocking')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const cypressJSONReport = new CypressReport({ on, folder: 'cypress/reports', filename: 'results_tests.json' })

      on('before:run', (details) => {
        cypressJSONReport.beforeRunHandler(details)
      })

      on('after:spec', (spec, results) => {
        cypressJSONReport.afterSpecWithDuration(spec, results)
      })

      on('after:run', (results) => {
        cypressJSONReport.afterRunHandler(results)
      })
    },
  },
})
