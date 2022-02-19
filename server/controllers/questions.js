const axios = require('axios');
const { API_KEY } = require('../../config.js');
axios.defaults.headers.common['Authorization'] = API_KEY;

module.exports = {
  // Retrieves list of questions
  getQuestions: (req, res) => {
    var {product_id, count} = req.query;
    console.log(product_id, count)
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/?product_id=${product_id}&count=${count}`)
      .then(result => {
        res.send(result.data).status(200);
      })
      .catch(err => {
        res.status(404).send(`Error retrieving product list: ${err}`);
      });
  },

  //Adds A Question
  addQuestion: (req, res) => {
    // var { body, name, email, product_id } = req.body
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/`, req.body)
      .then(response => {
        res.send(response).status(200)
      })
      .catch(err => {
        res.send(err).status(400);
      })
  },

  //Creates a put request for helpful question
  helpfulQuestion: (req, res) => {
    var {question_id} = req.params;
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${question_id}/helpful`)
      .then(response => {
        res.send(response).status(200);
      })
      .catch(err => {
        res.send(err).status(400)
      })
  },

  //Reports a question
  reportQuestions: (req, res) => {
    var {question_id} = req.params;
    console.log(question_id)
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${question_id}/report`)
      .then(response => {
        res.send(response).status(200);
      })
      .catch(err => {
        res.send(err).status(400);
      })
  }
}