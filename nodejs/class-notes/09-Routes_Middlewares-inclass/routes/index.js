'use strict';

/* ----------------------------------------- *
                Routes
/* ----------------------------------------- */


const router = require('express').Router();


router.route('/')
    .get((req, res) => res.send({ method: 'GET' }))
    .post((req, res) => res.send({ method: 'POST' }))
    .put((req, res) => res.send({ method: 'PUT' }));

module.exports = router;