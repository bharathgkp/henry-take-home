'use strict'
const express = require('express');
const database = require('./database');

database.generateDatabase();
const providerRoutes = require('./routes/provider');
const clientRoutes = require('./routes/client');
const { expireReservations } = require('./utils/reservationScheduler');

const app = express();
app.use(express.json());

app.use('/api/provider', providerRoutes);
app.use('/api/client', clientRoutes);

setInterval(expireReservations, 1 * 60 * 1000); // Run every 5 minutes

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});