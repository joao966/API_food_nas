const express = require('express');

const product = require('../controllers');

const router = express.Router();

router.get('/', product.getAll);
router.get('/:id', product.getById);
router.post('/', product.create);
router.put('/:id', product.update);
router.delete('/:id', product.exclude);

module.exports = router;
