const express = require('express');
const router = express.Router();

const inscritosController = require('../controllers/inscritosController');

/* GET home page. */
router.get('/newsletter', inscritosController.newsletter); 
router.get('/contatos', inscritosController.contatos); 


module.exports = router;
