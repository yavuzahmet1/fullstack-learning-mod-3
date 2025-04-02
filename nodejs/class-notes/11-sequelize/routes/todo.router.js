
"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const router = require("express").Router();

const todo = require('../controllers/todo.controller');

// // List
// router.get('/todos', todo.list);

// //* CRUD OPERATIONS

// // Create
// router.post('/todos', todo.create);

// // Read
// router.get('/todos/:id', todo.read);

// // Update
// router.put('/todos/:id', todo.update);

// // Delete
// router.delete('/todos/:id', todo.delete);


router.route('/todos')
    .get(todo.list)
    .post(todo.create);

router.route('/todos/:id')
    .get(todo.read)
    .put(todo.update)
    .delete(todo.delete);

module.exports = router;