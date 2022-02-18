const axios = require('axios');
const { API_KEY } = require('../../config.js');

module.exports = {
  // Retrieves list of reviews
  getReviews: (req, res) => {
    let productId = req.params.productId;
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews', {
      headers: { Authorization: `${API_KEY}` },
      params: {
        page: 1,
        count: 5,
        sort: 'newest',
        product_id: productId,
      },
    })
      .then(result => {
        res.json(result.data);
      })
      .catch(err => {
        res.status(404).send(`Error retrieving product list: ${err}`);
      });
  },
}