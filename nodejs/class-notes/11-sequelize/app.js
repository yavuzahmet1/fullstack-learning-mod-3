"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- *
 $ npm i express dotenv express-async-errors
 $ npm i sequelize
 $ npm i sqlite3
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})

/* ------------------------------------------------------- */
// MODELS:

// Sequelize:

const { Sequelize, DataTypes } = require('sequelize')
// sequelize instance oluştur:
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
const sequelize = new Sequelize('sqlite:' + process.env.SQLITE)

// define methodu sequelize modeli oluşturur:
// her bir model, veritabanında bir tabloya denk gelir.
// const ModelName = sequelize.define('tableName', {  modelDetails  })

const Todo = sequelize.define('todos', {

    // ilk sutun olarak ID tanımlamaya gerek yoktur. Sequelize otomatik tanımlar/yönetir.
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false, // default: true // data boş olabilir mi?
    //     unique: true, // default: false // tekrar eden kayıt engellensin mi? (benzersiz)
    //     comment: 'description',
    //     primaryKey: true, // default: false
    //     autoIncrement: true, // default: false // her yeni kayıt otomatik olarak +1 eklensin mi?
    //     defaultValue: 'default', // data gönderilmediğinde varsayılan olarak ne yazılsın?
    //     // field: 'customName',
    // },

    title: {
        type: DataTypes.STRING(256),
        allowNull: false,
    },

    description: DataTypes.STRING, // ShortHand Using.

    // -1: Low, 0: Normal, 1: High
    priority: {
        type: DataTypes.TINYINT,
        allowNull: false,
        default: 0
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
    },

    // createdAt ve updatedAt tanımalamaya gerek yoktur. Sequelize otomatik tanımlar/yönetir.
    // createdAt: false, // disable
    // updatedAt: false, // disable

})

// Syncronization:
//* Sync komutları ihtiyaca göre "1" defa çalıştırdıktan sonra yorum alınması unutulmasın.
// Model bilgilerini db'ye uygula:
// sequelize.sync() // CREATE TABLE IF NOT EXISTS
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE IF NOT EXISTS
// sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE IF NOT EXISTS & FROM BACKUP

// Connect to DB:
sequelize.authenticate()
    .then(() => console.log('* DB Connected.'))
    .catch(() => console.log('* DB Not Connected.'))

/* ------------------------------------------------------- */
// ROUTERS:
const router=express.Router();

//*Create
router.post("/todos",async (req,res)=>{
const todo= await Todo.create({
    title:"todo 1",
    desription:"des",
    priority:0,
    isDone:false
})

    res.status(201).send({
        error:false
    })
})

app.use(router)


/* ------------------------------------------------------- */

const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));