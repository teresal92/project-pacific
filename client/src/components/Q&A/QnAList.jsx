import React from 'react';
import QnAEntrie from './QnAEntrie.jsx';
import { Container, Grid, Button, Box, Accordion, AccordionDetails, AccordionSummary} from '@mui/material';

const QnAList = (props) => {
  return (
    <div>
      <div>


      <Grid
        sx={{
          flexDirection: 'column',
          bgcolor: 'transparent',
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