import React from 'react';
import QnAEntrie from './QnAEntrie.jsx';
const QnAList = (props) => {
  return(
    <div>
      <div>
        {props.questions.map(item => {
          return <QnAEntrie question={item} key={item.question_id}/>
        })}
      </div>
    </div>
  )
}

export default QnAList;