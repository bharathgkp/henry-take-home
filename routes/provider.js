const express = require('express');
const router = express.Router();
const providerProcessor = require('../processor/provider-proccessor');



/**
 * Date: MM/DD/YYYY
 * StartTime: ISOTimestamp
 * EndTime: ISOTimestamp
 * Duration: default 15 mins
 */
router.post('/schedule', providerProcessor.addAvailability);

router.get('/provider-list', providerProcessor.getAllProviders);

router.get('/provider-appointments', providerProcessor.getAppointments);

module.exports = router;