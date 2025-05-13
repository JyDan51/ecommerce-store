// backend/routes/productRoutes.js
const express = require('express');
const { getAll, create } = require('../controllers/productController');
const router = express.Router();

router.get('/', getAll);
router.post('/', create); // Optional: secure this with admin middleware if needed

module.exports = router;
