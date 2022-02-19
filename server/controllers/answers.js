const axios = require('axios');
const { API_KEY } = require('../../config.js');
axios.defaults.headers.common['Authorization'] = API_KEY;

module.exports = {
  // Retrieves list of questions
  getAnswers: (req, res) => {
    var {question_id} = req.params;
    var { count } = req.query
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${question_id}/answers?count=500`)
      .then(result => {
        res.send(result.data).status(200);
      })
      .catch(err => {
        res.status(404).send(`Error retrieving product list: ${err}`);
      });
  },

  //Adds an Answer
  addAnswer: (req, res) => {
    var {question_id} = req.params
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${question_id}/answers`, req.body)
      .then(response => {
        res.send(response).status(200)
      }).catch(err => {
        res.send(err).status(400)
      })
  },

  //Does put request to identify helpful answers
  helpfulAnswer: (req, res) => {
    var {answer_id} = req.params
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/answers/${answer_id}/helpful`)
      .then(response => {
        res.send(response.data).status(200);
      })
      .catch(err => {
        res.send(err).status(400);
      })
  },

    //Does put request to identify reported answers
  reportAnswer: (req, res) => {
    var {answer_id} = req.params
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/answers/${answer_id}/report`)
      .then(response => {
        console.log(response)
        res.send(response.data).status(200);
      })
      .catch(err => {
        res.send(err).status(400);
      })
  }
}