const router = require('express').Router();
const accountRoutes = require('./accountsRoutes');

router.use('/accounts', accountRoutes);

module.exports = router;