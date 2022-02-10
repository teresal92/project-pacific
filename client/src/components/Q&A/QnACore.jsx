import React from 'react';
import SearchAnswers from './SearchAnswers.jsx';
import QnAList from './QnAList.jsx';
import AddQnA from './AddQnA.jsx';
import axios from 'axios';
import {API_KEY} from '../../config/config.js'
import fakeData from './fakeData.js'

class QnACore extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      questions: fakeData,
      answers: [],
    }
    // this.getQuestions = this.getQuestions.bind(this);
  }
//WILL EVENTUALLY USE THIS
  // getQuestions() {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/`, {
  //     params: {
  //       product_id: 37,
  //       page: 1,
  //       count: 5
  //     },
  //     headers: {
  //       Authorization: API_KEY
  //     }
  //   })
  //     .then(({data}) => {
  //       console.log(data)
  //     }).catch(err => {
  //       console.error(err)
  //     })
  // }


  render() {
    return(
      <div>
        <div>
          <SearchAnswers />
          <QnAList data={this.state.questions}/>
          <AddQnA />
        </div>
      </div>
    )
  }
}

export default QnACore;