'use strict';
const {randomUUID: uuid} = require('crypto')
const moment = require('moment-timezone');
const utils = require('../../utils/timezone-convert');
const _ = require('lodash');

const Appointment = {
    data: [],
    query: {},
}

/**
 * id
 * providerId
 * clientId
 * confirmed
 * reservedAt
 * startTime
 * duration
 * timezone
 */

Appointment.create = function (providerId,startTime,timezone) {
    const appointment = {id: uuid(), providerId, confirmed: false, startTime, duration: '15', timezone, reservedAt: null};
    Appointment.data.push(appointment);
    return appointment;
}

// All providers work from 8am to 5pm for seeded data
Appointment.seedData = function (providers, timezone ) {
    const yesterday = moment().add(2,'day');

    // const yesterday = moment();
    providers.forEach(provider => {
        
        const startTime = moment(yesterday).set({hour: '8', minute: '0', second: '0'})
        const endTime = moment(yesterday).set({hour: '17', minute: '0', second: '0'})
        let curr = startTime;
        while (endTime.diff(curr) >=0) {
            Appointment.create(provider.id, curr.toISOString(),timezone)
            curr = curr.add(15,'minutes');

        }
    });

    return Appointment.data;
}

Appointment.getData = function () {
    return Appointment.data;
}

Appointment.query.addAvailability = function (providerId, start, end, timezone) {
    const startTime = utils.convertToUTC(start, timezone);
    const endTime = utils.convertToUTC(end,timezone);
    let curr = startTime;
    let newAppointments = []
    while (endTime.diff(curr) >=0) {
        newAppointments.push(Appointment.create(providerId, curr.toISOString(),timezone))
        curr = curr.add(15,'minutes');
    }
    return newAppointments
}

Appointment.query.getAllAppointments = function () {
    const records = _.filter(Appointment.data, {confirmed: false, reservedAt: null})
    return records;
}

Appointment.query.getAppointmentByProviderId = function (providerId) {
    const records = _.filter(Appointment.data, {providerId})
    return records;
}


Appointment.query.getAppointment = function (id) {
    const records = _.find(Appointment.data, {id})
    return records;
}

Appointment.query.reserveAppointment = function(id,reservedAt) {
    const appointmentIdx = _.findIndex(Appointment.data, {id});
    const appointment = Appointment.query.getAppointment(id);
    appointment.reservedAt = reservedAt.toISOString()
    console.log(appointment);
    Appointment.data[appointmentIdx] = appointment;
    return appointment;
}

Appointment.query.comfirmAppointment = function(id) {
    const appointmentIdx = _.findIndex(Appointment.data, {id});
    const appointment = Appointment.query.getAppointment(id);
    appointment.confirmed = true
    console.log(appointment);
    Appointment.data[appointmentIdx] = appointment;
    return appointment;
}

Appointment.query.expireReservations = function () {
    const now = moment()
    let expiredReservations = [];
    const unconfirmed = _.forEach(Appointment.data, (appointment) => {
        if(appointment.reservedAt) {
            if(moment(now).diff(appointment.reservedAt) > 1 * 60 * 1000) {
                appointment.reservedAt = null;
                expiredReservations.push(appointment);
            }
        }
    })

    return expiredReservations;
}

module.exports = Appointment;