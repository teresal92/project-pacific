import React from 'react';
import QnAEntrie from './QnAEntrie.jsx';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const QnAList = (props) => {
  return (
    <div>
      <div>
        {props.questions.map(item => {
          return <QnAEntrie question={item} key={item.question_id} getQuestions={props.getQuestions}/>
        })}

        <button onClick={ (e) => {
          var temp = props.count + 2
          props.addCount(temp)}
        }>Add Questions</button>
      </div>
    </div>
  )
}

export default QnAList;