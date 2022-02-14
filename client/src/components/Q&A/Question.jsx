import React from 'react';
import {API_KEY} from '../../config/config.js';
import axios from 'axios';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      name: '',
      email: '',

    }
    this.answerFormSubmit = this.answerFormSubmit.bind(this);
    this.sendQuestion = this.sendQuestion.bind(this);
  }



  answerFormSubmit(e) {
    e.preventDefault();
    if (e.target.placeholder === 'Name') {
      this.setState({
        name: e.target.value
      })
    } else if (event.target.placeholder === 'Body') {
      this.setState({
        body: e.target.value
      })
    } else if (event.target.placeholder === 'Email') {
      this.setState({
        email: e.target.value
      })
    }
    console.log(e.target.value)
  }

   sendQuestion(e) {
     e.preventDefault();
     axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/`, {
        body: this.state.body,
        name: this.state.name,
        email: this.state.email,
        product_id: this.props.prodId
    }, {
      headers: {
        Authorization: API_KEY
      }
    })
    .then(response => {
      console.log('Success ', response)
      this.props.getQuestions();
    }).catch(err => {
      console.error(err)
    })
  }


  render() {
    return (
      <div>
        <div>
          <form>
            <input onChange={this.answerFormSubmit} type='text' placeholder='Name'></input>
            <input onChange={this.answerFormSubmit} type='text' placeholder='Body'></input>
            <input onChange={this.answerFormSubmit} type='text' placeholder='Email'></input>
            <button className='addQuestionButton' onClick={(e) => {this.sendQuestion(e)}}>Add Question +</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Question;