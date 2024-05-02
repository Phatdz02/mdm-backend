const express = require('express');
const cors = require('cors');
const app = express();
const ticketHistoryRouter = require('./routes/ticketHistory');
const initData = require('./utils/initData');

initData()

app.use(express.json());
const corsOptions = {
    origin: '*',
};

app.use(cors(corsOptions));


app.use('/api', ticketHistoryRouter);

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});