const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');

app.set('Port', 8080);
app.use(morgan('dev'));
app.use(cors());

//Routes
app.use('/api/v1/', require('./routes/pokemon.route'))

//Start Server
app.listen(app.get('Port'),() =>{
    console.log('Listening on port', app.get('Port'));
});
