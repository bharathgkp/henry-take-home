'use strict';
const moment = require('moment');
const database = require('../database');
const Processor = {}

Processor.addAvailability = function (req, res, next) {

    try {
    const {providerId, start, end, timezone} = req.body;
    const newAppointments = database.query.appointment.addAvailability(providerId, start,end,timezone);
    res.status(200).send(newAppointments);
    }
    catch (err) {
        res.status(500).send(err.message);
    }

}

Processor.getAllProviders = function (req, res) {
    try {
        const providers = database.query.getAllProviders();
        res.status(200).send(providers);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

Processor.getAppointments = function (req, res) {
    try {
        const { providerId } = req.body;
        const providers = database.query.appointment.getAppointmentByProviderId(providerId);
        res.status(200).send(providers);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = Processor