import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {API_KEY} from '../../config/config.js';
axios.defaults.headers.common['Authorization'] = API_KEY;

const AnswerEntrie = (props) => {

  // useEffect(() => {
  //     axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${props.questionId}/answers`, {
  //       body: 'test',
  //       name:'estevan',
  //       email: 'test@gmail.com',
  //       photos: []
  //     }).then(response => {
  //       console.log(response)
  //     }).catch(err => {
  //       console.error(err)
  //     })
  //   })
    return(
      <div>
      <div className='answer-body'>
      A: {props.answers.body}
      </div>
      <div className='answer-comments'>by {props.answers.answerer_name}, {props.date} | Helpful? Yes({props.answers.helpfulness}) |</div>
    </div>
  )
}
export default AnswerEntrie;