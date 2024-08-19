'use strict'
const database = require('../database');
const moment = require('moment-timezone')
const _ = require('lodash');
const utils = require('../utils/timezone-convert');


const Processor = {}
/**
 * Gets all available appointments. These are appointments that are not booked or reserved
 */
Processor.getAvailableAppointments = (req, res) => {
    try {
        const appointments = database.query.appointment.getAllAppointments()
        const curr = moment();
        // Only return appointments that are 24 hours in advance
        const filterdAppointments = _.filter(appointments, function (appointment) {
            return moment(appointment.startTime).diff(curr) > 24 * 60 * 60 * 1000
        })


        let updatedRecords = _.map(filterdAppointments, (appointment) => {
            return {...appointment, startTimeLocal: utils.convertToTimezone(appointment.startTime, appointment.timezone).toLocaleString()}
        })
        res.status(200).send(updatedRecords);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

/**
 * Allows the reservation of an appointment if it exists. 
 * @returns 
 */
Processor.reserveAppointment = (req, res) => {
    try {

        const { appointmentId } = req.body;
        const appointment = database.query.appointment.getAppointment(appointmentId);
        if(!appointment) {
            throw new Error(`AppointmentId: ${appointmentId} does not exist`)
        }
        const curr = moment();

        if(moment(appointment.startTime).diff(curr) < 24 * 60 * 60 * 1000) {
            return res.status(400).send({err:'Reservations must be made at least 24 hours in advance'});
        }
        const update = database.query.appointment.reserveAppointment(appointmentId, moment())
        res.status(200).send(appointment);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

/**
 * Confirm an appointment
 */
Processor.comfirmAppointment = (req, res) => {
    try {
        const { appointmentId } = req.body;
        const appointment = database.query.appointment.getAppointment(appointmentId);
        if(!appointment) {
            throw new Error(`AppointmentId: ${appointmentId} does not exist`)
        }
        database.query.appointment.comfirmAppointment(appointmentId)
        res.status(200).send({message: 'Appointment has been confirmed', appointment});
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = Processor