var controller = require('./controllers');
var router = require('express').Router();
// router.route('/test')
//   .get(() => {
//     console.log('TEST')
//   })

//Products
router.route('/products')
  .get(controller.products.getProducts);

router.route('/products/:productId')
  .get(controller.products.getProductInfo);

router.route('/products/:productId/styles')
  .get(controller.products.getStyles);

router.route('/products/:productId/related')
  .get(controller.products.getRelated);

//QnA
router.route('/qa/questions')
  .get(controller.questions.getQuestions)

  .post(controller.questions.addQuestion)

router.route('/qa/questions/:question_id/answers')
  .get(controller.answers.getAnswers)

  .post(controller.answers.addAnswer)

router.route('/qa/questions/:question_id/helpful')
  .put(controller.questions.helpfulQuestion)

router.route('/qa/questions/:question_id/report')
  .put(controller.questions.reportQuestions)

router.route('/qa/answers/:answer_id/helpful')
  .put(controller.answers.helpfulAnswer)

router.route('/qa/answers/:answer_id/report')
  .put(controller.answers.reportAnswer)

// Cart
router.route('/cart/:skuId')
  .post(controller.cart.addToCart);

// Reviews
router.route('/reviews/meta/:productId')
  .get(controller.reviews.getReviewsMeta);

// Interactions
router.route('/interactions')
  .post(controller.interactions.addInteraction);

module.exports = router;
