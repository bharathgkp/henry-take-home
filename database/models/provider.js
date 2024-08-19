'use strict';
const {randomUUID: uuid} = require('crypto')
const { uniqueNamesGenerator, names } = require('unique-names-generator')

const Providers = {
    data : [],
    query: {}
}

Providers.data = [];

Providers.create = function (name) {
    Providers.data.push({id: uuid(), name});
}

Providers.seedData = function (num) {
    for (let i = 0; i < num; i++) {
    const name = uniqueNamesGenerator({dictionaries: [names]})
    Providers.create(name);
    }
    return Providers.data;
}

Providers.getData = function () {
    return Providers.data;
}

Providers.query.getAllProviders = function () {
    return Providers.data;
}
module.exports = Providers;