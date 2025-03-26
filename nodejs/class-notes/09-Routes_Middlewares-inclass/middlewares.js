'use strict';

/* ----------------------------------------- *
                Routes
/* ----------------------------------------- */

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT ?? 8000;
/* ----------------------------------------- *
//* Middleware is a function and must have three parameters.

// Middleware
app.get('/', (req, res, next) => {

    console.log('Middleware worked.');

    next(); // go to next route or middleware.

    // after next you can not use any other function.
    // res.send({
    //     message: "This is from middleware"
    // });
});

// Main Path
app.get('/', (req, res) => {

    console.log('Main route');

    res.send({
        message: 'Welcome'
    });
});

/* ----------------------------------------- *
//* How to send data from middleware to another middleware or route.

app.get('/', (req, res, next) => {

    req.message1 = 'middleware 1';
    next();
});

app.get('/', (req, res, next) => {

    req.message2 = 'middleware 2';
    next();
});

app.get('/', (req, res, next) => {

    req.message3 = 'middleware 3';
    next();
});

app.get('/', (req, res, next) => {

    req.message4 = 'middleware 4';
    next();
});

app.get('/', (req, res) => {

    res.send({
        message1: req.message1,
        message2: req.message2,
        message3: req.message3,
        message4: req.message4,
        message:'the end.'
    });

});
/* ----------------------------------------- */
//* Functional Middlewares

const middleware1 = (req, res, next) => {

    req.message1 = 'middlewareFn-1 runs.';

    next();
};

const middleware2 = (req, res, next) => {

    req.message2 = 'middlewareFn-2 runs.';

    next();
};

//* How to call functional middlewares ?

// 1. way / runs for each request
// app.use(middleware1); 
// app.use(middleware2);

// 2. way / runs for each request
app.use(middleware2, middleware1); // order is important



app.post('/', (req, res) => {

    res.send({
        message1: req.message1,
        message2: req.message2,
        message: 'the end.'
    });

});

/* ----------------------------------------- */
app.listen(PORT, () => console.log('Running at: http://127.0.0.1:' + PORT));
