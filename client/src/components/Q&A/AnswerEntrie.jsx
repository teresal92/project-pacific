import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, Card, CardContent, Grid, Typography, Button, TextField, OutlinedInput, Box, Container, Divider} from '@mui/material';

class AnswerEntrie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reported: 'Report'
    }

    this.helpfulRequest = this.helpfulRequest.bind(this);
    this.reportAnswer = this.reportAnswer.bind(this);
    this.onClickReport = this.onClickReport.bind(this);
  }

  helpfulRequest(e) {
    axios.put(`/api/qa/answers/${this.props.answers.answer_id}/helpful`)
      .then(async () => {
        console.log('Helpful')
        await this.props.getAnswers();
      }).catch(async err => {
        await console.log(err)
      })
  }
  reportAnswer(e) {
    axios.put(`/api/qa/answers/${this.props.answers.answer_id}/report`)
      .then( async() => (
         await console.log('Reported')
      )).catch(async () => (
        await console.log('didnt report')
      ))
  }

  onClickReport(e) {
    this.setState({
      reported: 'Reported'
    })
  }
  render() {
    return (
      <div>
        <Box
        sx={{
          my: 5,
        }}
        >
        <Typography
        variant='div'
        >
        A: {this.props.answers.body}
        </Typography>
        <Box sx={{
          my:2,
        }}>
        <div className='answer-comments'>
          <p className='answerBody'>
            <span>by</span>
            <span className='userName'> {this.props.answers.answerer_name}</span>
            <span>, {this.props.date} |</span>
            <span> Helpful? </span>
            <span className='underLine' onClick={this.helpfulRequest}>Yes</span>
            <span> ({this.props.answers.helpfulness}) | </span>
            <span className='underLine' onClick={(e) => {this.onClickReport(),this.reportAnswer()}} >{this.state.reported}</span>
          </p>
          <Divider />
        </div>
        </Box>
        </Box>
      </div>
    )
  }
}


export default AnswerEntrie;