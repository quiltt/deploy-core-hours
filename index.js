const core = require('@actions/core')
const moment = require('moment-timezone')

const timezone = core.getInput('timezone')

const now = moment().tz(timezone)

if (now.day() === 5 || now.day() === 6 || now.day() === 7) {
  console.log('Test')
  core.setFailed('It\'s probably better if you leave it for next week')
}
