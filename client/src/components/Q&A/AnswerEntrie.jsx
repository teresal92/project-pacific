import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {API_KEY} from '../../config/config.js';
axios.defaults.headers.common['Authorization'] = API_KEY;

const AnswerEntrie = (props) => {

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