import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../config/config.js';
import { FormControl, Card, CardContent, Grid, Typography, Button, TextField, OutlinedInput, Box, Container, Divider} from '@mui/material';
axios.defaults.headers.common['Authorization'] = API_KEY;

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
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/answers/${this.props.answers.answer_id}/helpful`)
      .then(async () => {
        await this.props.getAnswers();
      })
  }
  reportAnswer() {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/answers/${this.props.answers.answer_id}/report`)
      .then( () => {
        console.log('Reported')
      }).catch(err => {
        consolr.error(err)
      })
  }

  onClickReport(e) {
    this.setState({
      reported: 'Reported'
    })
  }
  render() {
    // return (
    //   <div>

    //       <div className='answer-body'>
    //         A: {this.props.answers.body}
    //       </div>

    //       <div className='answer-comments'>
    //         <p className='answerBody'>
    //           <span>by</span>
    //           <span className='userName'> {this.props.answers.answerer_name}</span>
    //           <span>, {this.props.date} |</span>
    //           <span> Helpful? </span>
    //           <span className='underLine' onClick={this.helpfulRequest}>Yes</span>
    //           <span> ({this.props.answers.helpfulness}) | </span>
    //           <span className='underLine'> Report</span>
    //         </p>
    //       </div>

    //   </div>
    // )

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
            <span className='underLine' onClick={this.reportAnswer} onClick={this.onClickReport}>{this.state.reported}</span>
          </p>
          <Divider light/>
        </div>
        </Box>
        </Box>
      </div>
    )
  }
}


export default AnswerEntrie;