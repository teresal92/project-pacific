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
          return <QnAEntrie question={item} key={item.question_id} setAnswers={props.setAnswers} />
        })}
      </div>
    </div>
  )
}

export default QnAList;