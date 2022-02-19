import React, { useState, useEffect } from 'react';
import { API_KEY } from '../../../../config.js'
import axios from 'axios';
import { FormControl, Card, CardContent, Grid, Typography, Button, TextField, OutlinedInput, Box, Container, Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { makeStyles } from '@mui/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Grow } from '@mui/material';
const useStyles = makeStyles({
  addAnswerHeader : {
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 22,
  },
  accordion: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 700,
  }
})

const Question = (props) => {

  const classes = useStyles()

  var [body, setBody] = useState('');
  var [name, setName] = useState('');
  var [email, setEmail] = useState('');
  var [questionBtnClicked, setQuestionBtnClicked] = useState(false)
  var [checked, setChecked] = useState(false);
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
    axios.post(`/api/qa/questions`, {
       body: body,
       name: name,
       email: email,
       product_id: props.prodId
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


  const handleChange = () => {
    setChecked((prev) => !prev);
  };
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
    <Accordion className={classes.accordion} onClick={(e) => {onClick(e) , handleChange(e)}}>
      <AccordionSummary addicon={<AddCircleOutlineIcon/>}>
        <Typography className={classes.addAnswerHeader}>Add Question</Typography>
      </AccordionSummary>
    </Accordion>
  </Grid>
):(
  <Grow in={checked}
  style={{ transformOrigin: '0 0 0' }}
  {...(checked ? { timeout: 1000 } : {})}>
  <Card sx={{
    bgcolor: 'background.paper',
    boxShadow: 10,
  }} style={{ maxWidth: 600, margin: 'auto auto' }}>

    <CardContent>
      <Button
        onClick={(e) => {handleChange(e), onClick(e)}}
        size='small'
        sx={{
          mb: 1
        }}
        ><ArrowBackIosNewIcon /></Button>
        <Typography className={classes.addAnswerHeader}>Add Question</Typography>
      <Accordion className={classes.accordion}>
      <form onSubmit={(e) => {sendQuestion(e), onClick(e)}}>
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
      </Accordion>
    </CardContent>
  </Card>
        </Grow>

)
}
export default Question;