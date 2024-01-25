//--- imports
const express = require('express');
const routes = require('./routes');
const app = express;
const cors = require('cors');

//---  port
const PORT = 3001;

//---  functions
app.use(express.json());
app.use(cors());
app.use('/backend/routes.js')

//---  port listener
app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
})
