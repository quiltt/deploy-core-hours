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

const currentTime = DateTime.now().setZone(timezone).setupBusiness(
  { businessDays: deployDays }
)

if(
  !currentTime.isBusinessDay() ||
  currentTime.isHoliday() ||
  currentTime.hour() <= dayStartHour ||
  currentTime.hour() >= dayEndHour
) {
  core.setFailed('It\'s probably better if you leave it for next week')
}
