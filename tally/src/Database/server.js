
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
const winston = require('winston');
// const { as } = require('pg-promise');
const pgp = require('pg-promise')();
const db = pgp("postgres://pnxlypfl:tpD5bwMq_YyFezD6beGMmGxjmuUy3bxk@ruby.db.elephantsql.com/pnxlypfl");

// Logger info
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

// ____________________________________________________________________________________________

app.get ('/songs', async(req, res) => {
    res.json(await db.many('SELECT * FROM Songs'))
}) 


// ____________________________________________________________________________________________

app.get ('/users', async(req, res) => {
    res.json(await db.many('SELECT * FROM tally'))
})



// ____________________________________________________________________________________________

app.get ('/users/:id', async(req, res) => {
    res.json(await db.manyOrNone(`SELECT songOne FROM tally WHERE id = $1`, [req.query.id]))
})


// ____________________________________________________________________________________________




app.listen(3001, ()=> {
    console.log("Server is running on port 3001");
})