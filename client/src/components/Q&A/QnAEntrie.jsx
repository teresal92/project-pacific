import React from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js';
class QnAEntrie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qId: '',
    }

    this.getAnswers = this.getAnswers.bind(this);
  }

    getAnswers() {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/563364/answers`, {
        headers: {
          Authorization: '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'
        }
      }).then(response => {
        console.log(response.data);
      }).catch(err => {
        console.error(err)
      })
    }

  render(){
    return(
      <div className='QnAEntrie'>
          <button onClick={this.getAnswers}>TEST</button>
        <div>
          <div className='qBody'>
          Q: {this.props.qObj.question_body}
          </div>
        </div>
      </div>
    )
  }
}



export default QnAEntrie;