import React, { useState, useEffect } from 'react';
import {API_KEY} from '../../config/config.js';
import axios from 'axios';
import { FormControl, Card, CardContent, Grid, Typography, Button, TextField, OutlinedInput, Box, Container, Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Question = (props) => {
  var [body, setBody] = useState('');
  var [name, setName] = useState('');
  var [email, setEmail] = useState('');
  var [questionBtnClicked, setQuestionBtnClicked] = useState(false)

  const answerFormSubmit = (e)  => {
    e.preventDefault();
    if (e.target.placeholder === 'Name') {
      setName(e.target.value)
    } else if (event.target.placeholder === 'Body') {
      setBody(e.target.value)
    } else if (event.target.placeholder === 'Email') {
      setEmail(e.target.value)
    }
    console.log(e.target.value)
  }

  const sendQuestion = (e) => {
    e.preventDefault();
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/`, {
       body: body,
       name: name,
       email: email,
       product_id: props.prodId
   }, {
     headers: {
       Authorization: API_KEY
     }
   })
   .then(response => {
     console.log('Success ', response)
     props.getQuestions();
   }).catch(err => {
     console.error(err)
   })
 }
  const onClick = (e) => {
    setQuestionBtnClicked(!questionBtnClicked);
  }

//  return(
//   <div>
//   <div>
//     <form>
//       <input onChange={answerFormSubmit} type='text' placeholder='Name'></input>
//       <input onChange={answerFormSubmit} type='text' placeholder='Body'></input>
//       <input onChange={answerFormSubmit} type='text' placeholder='Email'></input>
//       <button className='addQuestionButton' onClick={(e) => {sendQuestion(e)}}>Add Question +</button>
//     </form>
//   </div>
// </div>
//  )

return !questionBtnClicked  ? (
  <Grid>
    <Accordion>
      <AccordionSummary>
        <Typography>Add Question</Typography>
      </AccordionSummary>
    </Accordion>
  </Grid>
):(
  <Card sx={{
    bgcolor: 'background.paper',
    boxShadow: 10,
  }} style={{ maxWidth: 600, margin: '0 auto' }}>
    <CardContent>
      <Button
        onClick={onClick}
        size='small'
        sx={{
          mb: 1
        }}
        ><ArrowBackIosNewIcon /></Button>
      <form onSubmit={sendQuestion} >
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField onChange={answerFormSubmit} label='Enter Name' placeholder='Name' variant='outlined' fullWidth required />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField onChange={answerFormSubmit} type='email' label='Enter Email' placeholder='Email' variant='outlined' fullWidth required />
          </Grid>
          <Grid xs={12} item>
            <TextField onChange={answerFormSubmit} label='Enter Question Body' multiline rows={4} placeholder='Body' variant='outlined' fullWidth required />
          </Grid>
          <Grid xs={12} item>
            <Button type='submit' variant='contained' color='primary' fullWidth >Submit Answer</Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  </Card>

)
}
export default Question;