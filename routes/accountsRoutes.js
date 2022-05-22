const router = require('express').Router();
const accountsController = require('../controllers/accountsController');

router.get('/:accountId', accountsController.getSpecific);
router.get('/', accountsController.getAll);

module.exports = router;