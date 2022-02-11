import React from 'react';
import SearchAnswers from './SearchAnswers.jsx';
import QnAList from './QnAList.jsx';
import Question from './Question.jsx';
import axios from 'axios';
import {API_KEY} from '../../config/config.js'
import fakeData from './fakeData.js'
import Answer from './Answer.jsx'

class QnACore extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      questions: [],
      answers: [],
    }
    // this.getAnswers = this.getAnswers.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
    // this.getAnswers();
  }

  getQuestions() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/?product_id=42370`, {
      headers: {
        Authorization: API_KEY
      },
    }).then(response => {
      this.setState({
        questions: response.data.results
      })
    }).catch(err => {
      console.error(err)
    })
  }

  // getAnswers() {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/426085/answers`, {
  //     headers: {
  //       Authorization: API_KEY
  //     }
  //   }).then(response => {
  //     this.setState({
  //       answers: response.data.results
  //     })
  //   }).catch(err => {
  //     console.error(err)
  //   })
  // }


  render() {
    return(
      <div>
        <div>
          <SearchAnswers />
          <QnAList questions={this.state.questions}/>
          <Question />
        </div>
      </div>
    )
  }
}

export default QnACore;