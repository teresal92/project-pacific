import React from 'react';

const AnswerEntrie = (props) => {
  return(
    <div>
      {console.log(props)}
      <div className='answer-body'>
      A: {props.answers.body}
      </div>
      <span className='answer-comments'>by {props.answers.answerer_name}, {props.date}</span>
    </div>
  )
}
export default AnswerEntrie;