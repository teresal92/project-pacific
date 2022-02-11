import React from 'react';

const AnswerEntrie = (props) => {
  return(
    <div>
      {console.log(props)}
      <div>
      A: {props.answers.body}
      </div>
    </div>
  )
}
export default AnswerEntrie;