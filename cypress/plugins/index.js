const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
	addMatchImageSnapshotPlugin(on, config)
	on('file:preprocessor', cucumber())
	const file = config.env.configFile || 'prod'
	return getConfigurationByFile(file)
}

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
	const pathToConfigFile = path.resolve('.', 'config', `${file}.json`)
	return fs.readJson(pathToConfigFile)
}
