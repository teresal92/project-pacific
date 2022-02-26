const axios = require('axios');
const { API_KEY } = require('../../config.js');

module.exports = {
  // Retrieves list of products
  getProducts: (req, res) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products', {
      headers: { Authorization: `${API_KEY}` },
    })
      .then(result => {
        res.json(result.data);
      })
      .catch(err => {
        res.status(404).send(`Error retrieving product list: ${err}`);
      });
  },

  // Returns all product level information for a specified product id.
  getProductInfo: (req, res) => {
    const { productId } = req.params;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}`, {
      headers: { Authorization: `${API_KEY}` },
    })
      .then(result => {
        res.json(result.data);
      })
      .catch(err => {
        res.status(404).send(`Error retrieving product info: ${err}`);
      });
  },

  getStyles: (req, res) => {
    const productId = req.params.productId;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/styles`, {
      headers: { Authorization: `${API_KEY}` },
    })
      .then(result => {
        res.json(result.data);
      })
      .catch(err => {
        res.status(404).send(`Error retrieving styles: ${err}`);
      });
  },

  getRelated: (req, res) => {
    const productId = req.params.productId;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/related`, {
      headers: { Authorization: `${API_KEY}` },
    })
      .then(result => {
        res.json(result.data);
      })
      .catch(err => {
        res.status(404).send(`Error retrieving related items: ${err}`);
      });
  }

}