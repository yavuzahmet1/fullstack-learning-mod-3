'use strict';

/* ----------------------------------------- *
                Routes
/* ----------------------------------------- */

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT ?? 8000;
/* ----------------------------------------- *
// app.route('/').get((req, res) => res.send({ method: 'GET' }));

//* 'Router' is special app for URL control in ExpressJs
const router = express.Router();

// router.get('/', (req, res) => res.send({ method: 'GET' }));
// router.post('/', (req, res) => res.send({ method: 'POST' }));
// router.delete('/', (req, res) => res.send({ method: 'DELETE' }));

//* router.router()
router.route('/')
    .get((req, res) => res.send({ method: 'GET' }))
    .post((req, res) => res.send({ method: 'POST' }))
    .put((req, res) => res.send({ method: 'PUT' }));
    
app.use(router); // After finsihed router-design, it will call it in app.use()
/* ----------------------------------------- */
//* Import router

// const router = require('./routes/index.js');
// const router = require('./routes/index');
// const router = require('./routes');

app.use(require('./routes'));

/* ----------------------------------------- */
app.listen(PORT, () => console.log('Running at: http://127.0.0.1:' + PORT));