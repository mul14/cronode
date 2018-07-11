const CronJob = require('cron').CronJob;

class Cron {

  constructor() {
    this._instance = null
    this.fn = null
    this.at = '* * * * *'
    this.tz = ''
    this.runOnInit = false
  }

  static job(callback) {
    if (!this._instance) {
      this._instance = new this
    }

    this._instance.fn = callback

    return this._instance
  }

  start(now = false) {
    const job = new CronJob({
      cronTime: this.at,
      onTick: this.fn,
      runOnInit: now,
      start: false,
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

  /**
   * Runs daily job at specific time.
   *
   * @param {string} time  Time in 24 hours format (e.g 14:38).
   */
  dailyAt(time) {
    const [hour, minutes] = time.split(':')

    const segments = this.at.split(' ')

    segments[0] = minutes
    segments[1] = hour

    this.at = segments.join(' ')

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

  sundays() {
    this.at = '* * * * 0'
    return this
  }

  mondays() {
    this.at = '* * * * 1'
    return this
  }

  tuesdays() {
    this.at = '* * * * 2'
    return this
  }

  wednesdays() {
    this.at = '* * * * 3'
    return this
  }

  thursdays() {
    this.at = '* * * * 4'
    return this
  }

  fridays() {
    this.at = '* * * * 5'
    return this
  }

  saturdays() {
    this.at = '* * * * 6'
    return this
  }

}

module.exports = Cron
