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

module.exports = router;
