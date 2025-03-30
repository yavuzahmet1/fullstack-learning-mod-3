const path=require("path")
const express = require('express');
const rootDir=require('../util/path');
const router = express.Router();

// GET /
router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir,"views","shop.html"))
//   res.send('<h1>Shop Page</h1>');
});

module.exports = router; 