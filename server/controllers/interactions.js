const axios = require('axios');
const { API_KEY } = require('../../config.js');


module.exports = {
  // Adds a product to the cart based on sku_id
  addInteraction: (req, res) => {
    let { element, widget, time } = req.body;
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/interactions',
      { element, widget, time },
      { headers: { Authorization: `${API_KEY}` } },
    )
      .then(result => {
        res.status(201).send(result);
      })
      .catch(err => {
        res.status(401).send(`Error posting interaction: ${err}`);
      });
  },

}