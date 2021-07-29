import { DateTime } from 'luxon-business-days'

const core = require('@actions/core')

const timezone     = core.getInput('timezone')
const dayStartHour = core.getInput('dayStartHour')
const dayEndHour   = core.getInput('dayEndHour')
const deployDays   = []

if(core.getInput('deployMonday')) {
  deployDays.push(1)
}

if(core.getInput('deployTuesday')) {
  deployDays.push(2)
}

if(core.getInput('deployWednesday')) {
  deployDays.push(3)
}

if(core.getInput('deployThursday')) {
  deployDays.push(4)
}

if(core.getInput('deployFriday')) {
  deployDays.push(5)
}

const currentTime = DateTime.now().setZone(timezone)

currentTime.setupBusiness(
  { businessDays: deployDays }
)

if(!currentTime.isBusinessDay()) {
  core.setFailed('It\'s probably better if you leave it for next week')

} else if(currentTime.isHoliday()) {
  core.setFailed('Are you forgetting something?')

} else if(currentTime.hour <= dayStartHour) {
  core.setFailed('Go get some coffee, and try again later when people are online.')

} else if(currentTime.hour >= dayEndHour) {
  core.setFailed('It\'s probably better if you wait till tomorrow')
}
