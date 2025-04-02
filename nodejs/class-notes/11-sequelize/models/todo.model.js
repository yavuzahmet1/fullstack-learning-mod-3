'use strict';
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

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
        defaultValue: 0
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    .catch(() => console.log('* DB Not Connected.'));


module.exports = Todo;