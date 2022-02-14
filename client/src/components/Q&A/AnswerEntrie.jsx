import React from 'react';

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