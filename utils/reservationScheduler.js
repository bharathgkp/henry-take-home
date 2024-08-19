const database = require('../database');

const expireReservations = async () => {
     database.query.appointment.expireReservations()
};

module.exports = { expireReservations };