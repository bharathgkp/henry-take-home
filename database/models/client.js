'use strict';
const {randomUUID: uuid} = require('crypto')
const { uniqueNamesGenerator, names } = require('unique-names-generator')

const Client = {}

Client.data = [];

Client.create = function (name) {
    Client.data.push({id: uuid(), name});
}

Client.seedData = function (num) {
    for (let i = 0; i < num; i++) {
    const name = uniqueNamesGenerator({dictionaries: [names]})
    Client.create(name);
    }
    return Client.data;
}

Client.getData = function () {
    return Client.data;
}
module.exports = Client;