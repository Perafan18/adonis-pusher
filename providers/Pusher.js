'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const Pusher = require('pusher')

class PusherProvider extends ServiceProvider {
  register () {
    const Config = this.app.use('Adonis/Src/Config')
    this.app.singleton('Perafan/Pusher', () => {
      const config = {
        appId: Config.get('push.appId'),
        key: Config.get('push.key'),
        secret: Config.get('push.secret'),
        encrypted: Config.get('push.encrypted'),
        host: Config.get('push.host'),
        port: Config.get('push.port')
      }
      return new Pusher(config)
    })
  }

  * boot () {
    this.app.alias('Perafan/Pusher', 'Pusher')
  }
}

module.exports = PusherProvider
