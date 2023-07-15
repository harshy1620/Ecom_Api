const express = require('express');
const router = express.Router();

//requiring product controller
const productsController = require('../controllers/products_controller');

// Functionalities to be implemented
// 1. CREATE PRODUCT
// 2. READ PRODUCTS
// 3. UPDATE PRODUCT
// 4. DELETE PRODUCT


// to create a product  -- CREATE PRODUCT
router.post('/create', productsController.create);

// to get all the products   -- READ PRODUCTS
router.get('/', productsController.products);

// to update the quantity of a product -- UPDATE PRODUCT
router.post('/productID/update_quantity', productsController.updateQunatity);

// to delete a product using it's ID  -- DELETE PRODUCT
router.delete('/:productID', productsController.delete);



module.exports = router;