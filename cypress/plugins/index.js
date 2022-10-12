// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require('fs-extra');
const path = require('path');

// Report portal integration
const cucumber = require('cypress-cucumber-preprocessor').default;

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

module.exports = async (on, config) => {

  on('task', {
    log(message) {
      console.log(message)
      return null
    }
  })

  on('file:preprocessor', cucumber())
  on('after:run', (results) => {
    if (results) {
      fs.mkdirSync('cypress/reports/result', { recursive: true });
      fs.writeFile('cypress/reports/result/results.json', JSON.stringify(results));
    }
  });

  const file = config.env.configFile || 'dev';
  return getConfigurationByFile(file);
};
