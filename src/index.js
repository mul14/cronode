const CronJob = require('cron').CronJob;

class Cron {

  constructor() {
    this._instance = null
    this.fn = null
    this.tz = 'UTC'
  }

  static job(callback) {
    if (!this._instance) {
      this._instance = new this
    }

    this._instance.fn = callback

    return this._instance
  }

  start() {
    const job = new CronJob({
      cronTime: this.at,
      onTick: this.fn,
      runOnInit: true,
      timeZone: this.tz
    })

    job.start()

    return job
  }

  before() {

  }

  after() {

  }

  timezone(tz) {
    this.tz = tz
    return this
  }

  yearly() {
    this.at = '0 0 1 1 *'
    return this
  }

  annually() {
    this.at = '0 0 1 1 *'
    return this
  }

  monthly() {
    this.at = '0 0 1 * *'
    return this
  }

  weekly() {
    this.at = '0 0 * * 0'
    return this
  }

  daily() {
    this.at = '0 0 * * *'
    return this
  }

  hourly() {
    this.at = '0 0 * * *'
    return this
  }

  everyMinutes() {
    this.at = '* * * * *'
    return this
  }

  everyFiveMinutes() {
    this.at = '*/5 * * * *'
    return this
  }

  everyTenMinutes() {
    this.at = '*/10 * * * *'
    return this
  }

  everyFifteenMinutes() {
    this.at = '*/15 * * * *'
    return this
  }

  everyThirtyMinutes() {
    this.at = '*/30 * * * *'
    return this
  }


}
