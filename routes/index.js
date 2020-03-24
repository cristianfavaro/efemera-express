const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.index); 
router.post('/contato', homeController.contato);
router.post('/newsletter', homeController.newsletter);

module.exports = router;
