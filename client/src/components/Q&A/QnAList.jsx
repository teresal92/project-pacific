import React from 'react';
import QnAEntrie from './QnAEntrie.jsx';
import { Container, Grid, Button, Box} from '@mui/material';

const QnAList = (props) => {
  return (
    <div>
      <div>
      <Grid
        sx={{
          flexDirection: 'column',
          bgcolor: 'rgb(236, 241, 241)',
          // boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
          borderRadius: 2,
          whiteSpace:'normal',
          minWidth:450,
          maxWidth:850,
          margin:'auto'
        }}

      >
      <Grid xs={12} sm={12} item>
        {props.questions.map(item => {
            return <QnAEntrie question={item} key={item.question_id} getQuestions={props.getQuestions}/>
        })}
        <Button onClick={ (e) => {
          var temp = props.count + 2
          props.addCount(temp)}}>More Questions</Button>

      </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default QnAList;