const express = require('express');
const router = express.Router();
const clientProcessor = require('../processor/client-processor');

router.get('/available-appointments', clientProcessor.getAvailableAppointments);
router.post('/reserve', clientProcessor.reserveAppointment);
router.post('/confirm', clientProcessor.comfirmAppointment);

module.exports = router;