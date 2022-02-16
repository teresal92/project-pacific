import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../config/config.js';
import AnswerEntrie from './AnswerEntrie.jsx';
axios.defaults.headers.common['Authorization'] = API_KEY;
import { Container } from '@mui/material';
import { FormControl, Card, CardContent, Grid, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';

class QnAEntrie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qId: '',
      answerBody: [],
      body: '',
      name: '',
      email: '',
      photos: [],
      addAnswerClick: false,
      count: 5,
    }
    this.getAnswers = this.getAnswers.bind(this)
    this.addAnswer = this.addAnswer.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.answerFormSubmit = this.answerFormSubmit.bind(this);
  }

  componentDidMount() {
    this.getAnswers();
  }



   getAnswers() {
     axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${this.props.question.question_id}/answers?count=500`, {
      headers: {
        Authorization: API_KEY
      }
    }).then(async (response) => {
      var sortedAnswerArray = response.data.results.sort(function (a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date)
        return dateB - dateA;
      })
      var splicedAnswers = sortedAnswerArray.splice(0, this.state.count)
       await this.setState({
        answerBody: splicedAnswers
      })
    }).catch(err => {
      console.error(err)
    })
  }
  addAnswer(e) {
    e.preventDefault();
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${this.props.question.question_id}/answers`, {
      body: this.state.body,
      name: this.state.name,
      email: this.state.email,
      photos: this.state.photos,
    }).then(response => {
      this.getAnswers();
    }).catch(err => {
      console.error(err)
    })

  }

  handleAnswer(e) {
    this.setState({
      addAnswerClick: !this.state.addAnswerClick
    })
  }

  answerFormSubmit(e) {
    e.preventDefault();
    if (e.target.placeholder === 'Name') {
      this.setState({
        name: e.target.value
      })
    } else if (event.target.placeholder === 'Body') {
      this.setState({
        body: e.target.value
      })
    } else if (event.target.placeholder === 'Email') {
      this.setState({
        email: e.target.value
      })
    } else if (event.target.placeholder === 'Photos') {
      this.setState({
        photos: e.target.value
      })
    }
  }



  render() {

    var { addAnswerClick } = this.state
    return !addAnswerClick ? (
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 6,
          borderRadius: 5,
          p: 2,
          m: 2,
          mx: 40,
          minWidth: 300,
        }}
      >
        <div className='QnAEntrie'>
          <div>
            <div className='qBody'>
              Q: {this.props.question.question_body}
            </div>
            <span>Helpful? Yes({this.props.question.question_helpfulness})</span>
            <button onClick={this.handleAnswer}>Add Answer</button>
            <div>
              {this.state.answerBody.map(item => {
                var temp = new Date(item.date)
                var date = temp.toString().substring(0, 16)
                return <AnswerEntrie answers={item} key={item.answer_id} date={date} questionId={this.props.question.question_id} getAnswers={this.getAnswers}/>
              })}
            </div>
          </div>
        </div>
      </Box>
    ) : (
      <Box
        sx={{
          bgcolor: '#bdbdbd',
          boxShadow: 6,
          borderRadius: 5,
          maxWidth: 700,
          margin: "0 auto",
          minWidth: 300,
        }}
      >
        <Typography variant='h6' align='center'>
          Q: {this.props.question.question_body}
        </Typography>
        <Card sx={{
          bgcolor: 'background.paper',
          boxShadow: 10,
        }} style={{ maxWidth: 600, margin: '0 auto' }}>
          <CardContent>
          <button onClick={this.handleAnswer}>Back</button>
            <form onSubmit={this.addAnswer}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField onChange={this.answerFormSubmit} label='Enter Name' placeholder='Name' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField onChange={this.answerFormSubmit} type='email' label='Enter Email' placeholder='Email' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                  <TextField onChange={this.answerFormSubmit} label='Enter Photo URL' placeholder='Photos' variant='outlined' fullWidth />
                </Grid>
                <Grid xs={12} item>
                  <TextField onChange={this.answerFormSubmit} label='Enter Body' multiline rows={4} placeholder='Body' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                  <Button type='submit' variant='contained' color='primary' fullWidth>Submit Answer</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
    )
  }
}



export default QnAEntrie;
