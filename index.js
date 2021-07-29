import { DateTime } from 'luxon-business-days'

const core = require('@actions/core')

const timezone     = core.getInput('timezone')
const dayStartHour = core.getInput('dayStartHour')
const dayEndHour   = core.getInput('dayEndHour')
const deployDays   = [
  core.getInput('deployMonday')    && 1,
  core.getInput('deployTuesday')   && 2,
  core.getInput('deployWednesday') && 3,
  core.getInput('deployThursday')  && 4,
  core.getInput('deployFriday')    && 5
].filter(x => x)

const currentTime = DateTime.now()

currentTime.setZone(timezone)
currentTime.setupBusiness(
  { businessDays: deployDays }
)

if(!currentTime.isBusinessDay()) {
  core.setFailed('It\'s probably better if you leave it for next week')
}

if(currentTime.isHoliday()) {
  core.setFailed('Are you forgetting something?')
}

if(currentTime.hour() <= dayStartHour) {
  core.setFailed('Go get some coffee, and try again later when people are online.')
}

if(currentTime.hour() >= dayEndHour) {
  core.setFailed('It\'s probably better if you wait till tomorrow')
}
