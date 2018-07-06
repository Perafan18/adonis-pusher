'use strict'

const path = require('path')

module.exports = async (cli) => {
  try {
    await cli.copy(path.join(__dirname, 'stubs/pusher.js'), path.join(cli.helpers.configPath(), 'pusher.js'))
    cli.command.completed('create', 'config/pusher.js')
  } catch (error) {
    console.log(error)
  }
}
