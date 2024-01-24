const router = require('express').Router();

router.use('/', (req, res) => {res.send('Hello World')});

router.use('/users', require('./users'));

module.exports = router;