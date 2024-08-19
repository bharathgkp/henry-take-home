'use strict';
const Providers = require('./models/provider');
const Client = require('./models/client');
const Appointment = require('./models/appointment');

const Database = {
    table: {},
    query: {
        appointment: Appointment.query,
        provider: Providers.query,
    }
}

Database.generateDatabase = function () {
    const providers = Providers.seedData(5);
    const clients = Client.seedData(5);
    Database.table.providers = providers;
    Database.table.clients = clients

    let appointments = Appointment.seedData(Database.table.providers, 'America/Los_Angeles');

    Database.table.appointments = appointments;
}

Database.getData = function () {
    return Database.table;
}

Database.query.getAllProviders = function () {
    return Database.table.providers;
}

module.exports = Database;