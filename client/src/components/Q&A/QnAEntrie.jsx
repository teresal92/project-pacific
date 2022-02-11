import React from 'react';
import axios from 'axios';
import {API_KEY} from '../../config/config.js';
import AnswerEntrie from './AnswerEntrie.jsx';

class QnAEntrie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qId: '',
      answerBody: [],
    }
    this.getAnswers = this.getAnswers.bind(this)
  }

  componentDidMount() {
    this.getAnswers();
  }

  getAnswers() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${this.props.question.question_id}/answers`, {
      headers: {
        Authorization: API_KEY
      }
    }).then(response => {
      this.setState({
        answerBody: response.data.results
      })
    }).catch(err => {
      console.error(err)
    })
  }

  render() {
    return (
      <div className='QnAEntrie'>
        <div>
          <div className='qBody'>
          Q: {this.props.question.question_body}
          </div>
          <div>
              {this.state.answerBody.map(item => {
                var temp = new Date(item.date)
                var date = temp.toString().substring(0,16)
                return <AnswerEntrie answers={item} key={item.answer_id} date={date}/>
              })}
          </div>
        </div>
      </div>
    )
  }
}



export default QnAEntrie;