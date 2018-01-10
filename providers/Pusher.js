'use strict'

const { ServiceProvider, Ioc } = require('@adonisjs/fold')
const Pusher = require('pusher')

class PusherProvider extends ServiceProvider {
  register () {
    const Config = this.app.use('Adonis/Src/Config')
    this.app.singleton('Perafan/Pusher', (app) => {
      return new Pusher({
        appId: Env.get('PUSHER_APP_ID'),
        key: Env.get('PUSHER_APP_KEY'),
        secret: Env.get('PUSHER_SECRET_KEY'),
        encrypted: Env.get('PUSHER_ENCRYPTED'),
        host: Env.get('PUSHER_HOST'),
        port: Env.get('PUSHER_PORT')
      })
    })
  }

  * boot() {
    Ioc.alias('Pusher', 'Perafan/Pusher')
  }
}

module.exports = PusherProvider
