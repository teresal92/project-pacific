import React from 'react';
// import SearchAnswers from './SearchAnswers.jsx';
import QnAList from './QnAList.jsx';
import Question from './Question.jsx';
import axios from 'axios';
import { API_KEY } from '../../config/config.js'
import fakeData from './fakeData.js'
axios.defaults.headers.common['Authorization'] = API_KEY;
class QnACore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: [],
      prodId: 42367,
      userInput: '',
      filteredQuestions: [],
    }
    // this.getAnswers = this.getAnswers.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    this.filterSearch
  }


  getQuestions() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/?product_id=${this.state.prodId}&count=20`, {
    }).then(response => {
      var sortedRes = response.data.results.sort(function (a, b) {
        return b.question_helpfulness - a.question_helpfulness;
      })
      {console.log(sortedRes)}
      this.setState({
        questions: sortedRes
      })
    }).catch(err => {
      console.error(err)
    })
  }
  grabUserInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  filterSearch(e) {
    var filtered = this.state.questions.filter(question => {
      if (this.state.userInput === '') {
        return question
      } else if (question.question_body.toLowerCase().includes(this.state.userInput.toLowerCase())) {
          return question
      }
      // var questionLowerCase = question.question_body.toLowerCase();
      // return questionLowerCase.includes(this.state.userInput.toLowerCase());
    })
    this.setState({
      filteredQuestions: filtered
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      userInput: '',
    })
  }
  render() {
    var {questions} = this.state
    return this.state.filteredQuestions.length > 0 ?
    <div>
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          className='search-questions'
          placeholder='Search Questions'
          onChange={(e) => {this.grabUserInput(e), this.filterSearch(e)}}></input>
      </form>
    </div>
    <div>
      <QnAList questions={this.state.filteredQuestions} setAnswers={this.setAnswers} />
      <Question prodId={this.state.prodId} getQuestions={this.getQuestions} />
    </div>
  </div> :(
    (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              className='search-questions'
              placeholder='Search Questions'
              onChange={(e) => {this.grabUserInput(e), this.filterSearch(e)}}></input>
          </form>
        </div>
        <div>
          <QnAList questions={this.state.questions} setAnswers={this.setAnswers} />
          <Question prodId={this.state.prodId} getQuestions={this.getQuestions} />
        </div>
      </div>
    ))
  }
}

export default QnACore;