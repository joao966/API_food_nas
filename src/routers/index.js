const express = require('express');

const routerProduct = require('./product');

const router = express.Router();

router.get('/', (_req, res) => res.status(200).json({ message: 'Welcome in API on FoodNas' }));
router.use('/api/v1/product', routerProduct);

module.exports = router;
