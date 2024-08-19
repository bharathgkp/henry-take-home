const moment = require('moment-timezone'); // Import moment-timezone for timezones

const utils = {};

/**
 * 
 * @param {*} timestamp in ISO 8601 standard format 2024-08-19T01:29:38
 * @param {*} timezone can be the following 'America/Los_Angeles','America/Denver','America/New_York'
 * @returns timestamp in utc
 */

utils.convertToUTC = function (timestamp, timezone) {
  // Create a Moment object with the specified timezone
  const momentObj = moment.tz(timestamp, timezone);

  // Convert to UTC
  const utcMoment = momentObj.utc();


  return utcMoment;
}

utils.convertToTimezone = function (timestamp, timezone) {
    // Create a Moment object with the specified timezone
    return moment.tz(timestamp, timezone);
  
  }

module.exports = utils