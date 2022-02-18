import React from 'react';
// import SearchAnswers from './SearchAnswers.jsx';
import QnAList from './QnAList.jsx';
import Question from './Question.jsx';
import axios from 'axios';
import { API_KEY } from '../../../../config.js'
import fakeData from './fakeData.js'
axios.defaults.headers.common['Authorization'] = API_KEY;
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

class QnACore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: [],
      prodId: this.props.prodId,
      userInput: '',
      filteredQuestions: [],
      count: 4,
      allQuestions: [],
    }
    // this.getAnswers = this.getAnswers.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addCount = this.addCount.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }


  getQuestions() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/?product_id=${this.state.prodId}&count=200`, {
    }).then(response => {
      var sortedRes = response.data.results.sort(function (a, b) {
        return b.question_helpfulness - a.question_helpfulness;
      })
       var sortedWithoutReported = sortedRes.filter(item =>{
         return item.reported !== true
       })
      var temp = sortedWithoutReported.splice(0, this.state.count)
      this.setState({
        questions: temp,
        allQuestions: sortedRes,
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
    var filtered = this.state.allQuestions.filter(question => {
      if (this.state.userInput === '') {
        return question
      } else if (question.question_body.toLowerCase().includes(this.state.userInput.toLowerCase())) {
          return question
      }
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

  addCount(count) {
    this.setState({
      count: count
    })
    this.getQuestions()
  }

  render() {
    var {questions} = this.state
    return this.state.filteredQuestions.length > 0 ?
    <div>
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          className='search-questions'
          placeholder='Have a question? Search for answers…'
          onChange={(e) => {this.grabUserInput(e), this.filterSearch(e)}}></input>
      </form>
    </div>
    <div>
      <QnAList count={this.state.count} addCount={this.addCount} questions={this.state.filteredQuestions} />
      <Question prodId={this.state.prodId} getQuestions={this.getQuestions} />
    </div>
  </div> :(
    (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              className='search-questions'
              placeholder='Have a question? Search for answers…'
              onChange={(e) => {this.grabUserInput(e), this.filterSearch(e)}}></input>
          </form>
        </div>
        <div>
          <QnAList count={this.state.count} addCount={this.addCount} questions={this.state.questions} getQuestions={this.getQuestions}/>
          <Question prodId={this.state.prodId} getQuestions={this.getQuestions} />
        </div>
      </div>
    ))
  }
}

export default QnACore;