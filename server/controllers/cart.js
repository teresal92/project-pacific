const axios = require('axios');
const { API_KEY } = require('../../config.js');


module.exports = {
  // Adds a product to the cart based on sku_id
  addToCart: (req, res) => {
    const skuId = Number(req.params.skuId);
    // console.log(typeof skuId);
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/cart',
      { sku_id: skuId },
      { headers: { Authorization: `${API_KEY}` } },
    )
      .then(result => {
        res.status(201).send(result.data);
      })
      .catch(err => {
        res.status(401).send(`Error posting to cart: ${err}`);
      });
  },

}