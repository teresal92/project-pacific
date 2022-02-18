var controller = require('./controllers');
var router = require('express').Router();
// router.route('/test')
//   .get(() => {
//     console.log('TEST')
//   })

router.route('/products')
  .get(controller.products.getProducts);

router.route('/products/:productId')
  .get(controller.products.getProductInfo);

router.route('/products/:productId/styles')
  .get(controller.products.getStyles);

router.route('/reviews/:productId')
  .get(controller.reviews.getReviews);

router.route('/cart/:skuId')
  .post(controller.cart.addToCart);

module.exports = router;
