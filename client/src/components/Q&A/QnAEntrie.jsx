import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../config/config.js';
import AnswerEntrie from './AnswerEntrie.jsx';
axios.defaults.headers.common['Authorization'] = API_KEY;
import { FormControl, Card, CardContent, Grid, Typography, Button, TextField, OutlinedInput, Box, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  accordion: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    background: 'rgb(236, 241, 241)',
    border: 0,
    borderRadius: 5,
    color: 'black',
    margin: 5,
    fontSize: 18,
    whiteSpace:'normal',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  },
  summary: {
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    whiteSpace:'normal',
  },
  detail: {
    flexDirection: 'row',
    whiteSpace:'normal',
    background: '#bdbdbd',
    borderRadius:10,
    justifyContent: "center",
    alignItems:'center',
  },
  btn: {
    float: 'right'
  },
  firstAnswerBtn: {
    display: 'inline-block',
    alignItems: 'center'
  }

})


const QnAEntrie = (props) => {

  const classes = useStyles()

  var [qId, setqId] = useState('');
  var [answerBody, setAnswerBody] = useState([]);
  var [body, setBody] = useState('');
  var [name, setName] = useState('');
  var [email, setEmail] = useState('');
  var [photos, setPhotos] = useState([]);
  var [addAnswerClick, setAddAnswerClick] = useState(false);
  var [count, setCount] = useState(2);


  const getAnswers = () => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${props.question.question_id}/answers?count=500`, {
      headers: {
        Authorization: API_KEY
      }
    }).then( (response) => {
      var sortedAnswerArray = response.data.results.sort(function (a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date)
        return dateB - dateA;
      })
      var temp = sortedAnswerArray.filter(item => {
        if (item.body.length > 0) {
          return item
        }
      })
      var splicedAnswers = temp.splice(0, count)
      setAnswerBody(splicedAnswers)
    }).catch(err => {
      console.error(err)
    })
  }

  const helpfulQuestion = (e) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${props.question.question_id}/helpful`)
    .then( (e) => {
      props.getQuestions();
    })
  }

  const addAnswer = (e) => {
    e.preventDefault();
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${props.question.question_id}/answers`, {
      body: body,
      name: name,
      email: email,
      photos: photos,
    }).then(response => {
      getAnswers();
    }).catch(err => {
      console.error(err)
    })

  }

  const handleAnswer = (e) => {
    setAddAnswerClick(!addAnswerClick)
  }

  const answerFormSubmit = (e) => {
    e.preventDefault();
    if (e.target.placeholder === 'Name') {
      setName(e.target.value)
    } else if (event.target.placeholder === 'Body') {
      setBody(e.target.value)
    } else if (event.target.placeholder === 'Email') {
      setEmail(e.target.value)
    } else if (event.target.placeholder === 'Photos') {
      setPhotos(e.target.value)
    }
  }

  const reportQuestion = (e) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${props.question.question_id}/report`)
    .then(async () => {
      await props.getQuestions()
    })
  }

  useEffect(() => {
    getAnswers();
  },[])
  return !addAnswerClick ? (
    <Accordion  defaultExpanded={true} className={classes.accordion}>
        <AccordionSummary className={classes.summary} expandIcon={<ExpandMoreIcon/>}>
          <Typography variant='h5' align='center' >
            Q: {props.question.question_body}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.detail}>
          <div> {answerBody.length === 0 ? (
            <div>
              <Grid className={classes.detail}>
              <Typography onClick={helpfulQuestion} className='helpfulQuestion'>Helpful? Yes({props.question.question_helpfulness})</Typography>
              <Button
                onClick={handleAnswer}
                endIcon={<SendIcon />}
                size='medium'
                variant='contained'
                color='primary'
                >Add First Answer</Button>
              <Button size='small' varient='text' color='error' onClick={reportQuestion} className={classes.btn}>Report Question</Button>
              </Grid>
            </div>
          ) : (
            <div>
              <Box sx={{
                boxShadow: 40,
                whiteSpace: 'normal'
              }}>
                {answerBody.map(item => {
                  var temp = new Date(item.date)
                  var date = temp.toString().substring(0, 16)
                  return <AnswerEntrie answers={item} key={item.answer_id} date={date} questionId={props.question.question_id} getAnswers={getAnswers} />
                })}
              </Box>
              <Grid
                display='inline'
                container direction="row"
                alignItems="right"
                >
                <Grid item xs={12}>
                  <Typography onClick={helpfulQuestion} className='helpfulQuestion'>Helpful? Yes({props.question.question_helpfulness})</Typography>
                  <Button
                    onClick={handleAnswer}
                    endIcon={<SendIcon />}
                    size='small'
                    color='primary'
                    >Add Answer
                  </Button>
                  <div className='reportQuestion'>
                    <Button size='small' varient='text' color='error' onClick={reportQuestion}>Report Question</Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          )}
          </div>
        </AccordionDetails>
      </Accordion>
    ) : (
      <Box
      sx={{
        bgcolor: 'rgb(236, 241, 241)',
        // boxShadow: 6,
        borderRadius: 5,
        maxWidth: 700,
        margin: "0 auto",
        minWidth: 300,
      }}
      >
        <Typography variant='h5' align='center' sx={{ my: 3 }}>
          Q: {props.question.question_body}
        </Typography>
        <Card sx={{
          bgcolor: 'background.paper',
          boxShadow: 10,
        }} style={{ maxWidth: 600, margin: '0 auto' }}>
          <CardContent>
            <Button
              onClick={handleAnswer}
              size='small'
              sx={{
                mb: 1
              }}
              ><ArrowBackIosNewIcon /></Button>
            <form onSubmit={(e) => {addAnswer(e), handleAnswer(e)}} >
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField onChange={answerFormSubmit} label='Enter Name' placeholder='Name' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField onChange={answerFormSubmit} type='email' label='Enter Email' placeholder='Email' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                  <TextField onChange={answerFormSubmit} label='Enter Photo URL' placeholder='Photos' variant='outlined' fullWidth />
                </Grid>
                <Grid xs={12} item>
                  <TextField onChange={answerFormSubmit} label='Enter Body' multiline rows={4} placeholder='Body' variant='outlined' fullWidth required />
                </Grid>
                <Grid xs={12} item>
                  <Button type='submit' variant='contained' color='primary' fullWidth >Submit Answer</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box >
    )
  }




  export default QnAEntrie;
  // class QnAEntrie extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       qId: '',
  //       answerBody: [],
  //       body: '',
  //       name: '',
  //       email: '',
  //       photos: [],
  //       addAnswerClick: false,
  //       count: 5,
  //     }
  //     this.getAnswers = this.getAnswers.bind(this)
  //     this.addAnswer = this.addAnswer.bind(this);
  //     this.handleAnswer = this.handleAnswer.bind(this);
  //     this.answerFormSubmit = this.answerFormSubmit.bind(this);
  //     this.helpfulQuestion = this.helpfulQuestion.bind(this)
  //     this.reportQuestion = this.reportQuestion.bind(this);
  //   }

  //   componentDidMount() {
  //     this.getAnswers();
  //   }


  //   getAnswers() {
  //     axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${this.props.question.question_id}/answers?count=500`, {
  //       headers: {
  //         Authorization: API_KEY
  //       }
  //     }).then(async (response) => {
  //       var sortedAnswerArray = response.data.results.sort(function (a, b) {
  //         var dateA = new Date(a.date), dateB = new Date(b.date)
  //         return dateB - dateA;
  //       })
  //       var temp = sortedAnswerArray.filter(item => {
  //         if (item.body.length > 0) {
  //           return item
  //         }
  //       })
  //       var splicedAnswers = temp.splice(0, this.state.count)

  //       await this.setState({
  //         answerBody: splicedAnswers
  //       })
  //     }).catch(err => {
  //       console.error(err)
  //     })
  //   }

  //   helpfulQuestion(e) {
  //     axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${this.props.question.question_id}/helpful`)
  //       .then(async (e) => {
  //         await this.props.getQuestions();
  //       })
  //   }

  //   addAnswer(e) {
  //     e.preventDefault();
  //     axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${this.props.question.question_id}/answers`, {
  //       body: this.state.body,
  //       name: this.state.name,
  //       email: this.state.email,
  //       photos: this.state.photos,
  //     }).then(response => {
  //       this.getAnswers();
  //     }).catch(err => {
  //       console.error(err)
  //     })

  //   }

  //   handleAnswer(e) {
  //     this.setState({
  //       addAnswerClick: !this.state.addAnswerClick
  //     })
  //   }

  //   answerFormSubmit(e) {
  //     e.preventDefault();
  //     if (e.target.placeholder === 'Name') {
  //       this.setState({
  //         name: e.target.value
  //       })
  //     } else if (event.target.placeholder === 'Body') {
  //       this.setState({
  //         body: e.target.value
  //       })
  //     } else if (event.target.placeholder === 'Email') {
  //       this.setState({
  //         email: e.target.value
  //       })
  //     } else if (event.target.placeholder === 'Photos') {
  //       this.setState({
  //         photos: e.target.value
  //       })
  //     }
  //   }

  //   reportQuestion(e) {
  //     axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${this.props.question.question_id}/report`)
  //       .then(async () => {
  //         await this.props.getQuestions()
  //       })
  //   }

  //   render() {

  //     var { addAnswerClick } = this.state
  //     var { answerBody } = this.state
  //     // return !addAnswerClick ? (
  //     //   <Box
  //     //     sx={{
  //     //       bgcolor: 'background.paper',
  //     //       boxShadow: 10,
  //     //       borderRadius: 3,
  //     //       p: 2,
  //     //       m: 2,
  //     //       mx: 60,
  //     //       minWidth: 300,
  //     //     }}
  //     //   >
  //     //     <div className='QnAEntrie'>
  //     //       <div>
  //     //         {/* <div className='qBody'>
  //     //           Q: {this.props.question.question_body}
  //     //         </div> */}
  //     //         <Typography variant='h5' align='center' >
  //     //         Q: {this.props.question.question_body}</Typography>
  //     //         {/* <span className='helpfulPlacement'>Helpful? Yes({this.props.question.question_helpfulness})</span> */}
  //     //         <div> {answerBody.length === 0 ? (
  //     //           <div >
  //     //         <Typography onClick={this.helpfulQuestion} className='helpfulQuestion'>Helpful? Yes({this.props.question.question_helpfulness})</Typography>
  //     //           <Grid
  //     //           justify='center'
  //     //           alignItems="center"
  //     //           container direction="column"
  //     //           >
  //     //             <Button
  //     //             onClick={this.handleAnswer}
  //     //             endIcon={<SendIcon />}
  //     //             size='medium'
  //     //             variant='outlined'
  //     //             color='primary'
  //     //             >Add First Answer</Button>
  //     //           </Grid>
  //     //             </div>
  //     //         ) : (
  //     //           <div>
  //     //             {this.state.answerBody.map(item => {
  //     //               var temp = new Date(item.date)
  //     //               var date = temp.toString().substring(0, 16)
  //     //               return <AnswerEntrie answers={item} key={item.answer_id} date={date} questionId={this.props.question.question_id} getAnswers={this.getAnswers}/>
  //     //             })}
  //     //             <Grid
  //     //             display='inline'
  //     //             container direction="column"
  //     //             alignItems="right"
  //     //             >
  //     //             <Grid item xs={12}>
  //     //             <Typography onClick={this.helpfulQuestion} className='helpfulQuestion'>Helpful? Yes({this.props.question.question_helpfulness})</Typography>
  //     //             <Button
  //     //             onClick={this.handleAnswer}
  //     //             endIcon={<SendIcon />}
  //     //             size='small'
  //     //             color='primary'
  //     //             >Add Answer
  //     //             </Button>
  //     //             <div className='reportQuestion'>
  //     //               <Button size='small' varient='text' disabled={this.state.btnDisabled} color='error' onClick={this.reportQuestion}>Report Question</Button>
  //     //             </div>
  //     //           </Grid>
  //     //             </Grid>
  //     //           </div>
  //     //         )}

  //     //         </div>

  //     //       </div>
  //     //     </div>
  //     //   </Box>
  //     // ) : (
  //     //   <Box
  //     //     sx={{
  //     //       bgcolor: '#bdbdbd',
  //     //       boxShadow: 6,
  //     //       borderRadius: 5,
  //     //       maxWidth: 700,
  //     //       margin: "0 auto",
  //     //       minWidth: 300,
  //     //     }}
  //     //   >
  //     //     <Typography variant='h5' align='center' sx={{my:3}}>
  //     //       Q: {this.props.question.question_body}
  //     //     </Typography>
  //     //     <Card sx={{
  //     //       bgcolor: 'background.paper',
  //     //       boxShadow: 10,
  //     //     }} style={{ maxWidth: 600, margin: '0 auto' }}>
  //     //       <CardContent>
  //     //         <Button
  //     //         onClick={this.handleAnswer}
  //     //         size='small'
  //     //         sx={{
  //     //           mb:1
  //     //         }}
  //     //         ><ArrowBackIosNewIcon/></Button>
  //     //         <form onSubmit={this.addAnswer}>
  //     //           <Grid container spacing={1}>
  //     //             <Grid xs={12} sm={6} item>
  //     //               <TextField onChange={this.answerFormSubmit} label='Enter Name' placeholder='Name' variant='outlined' fullWidth required />
  //     //             </Grid>
  //     //             <Grid xs={12} sm={6} item>
  //     //               <TextField onChange={this.answerFormSubmit} type='email' label='Enter Email' placeholder='Email' variant='outlined' fullWidth required />
  //     //             </Grid>
  //     //             <Grid xs={12} item>
  //     //               <TextField onChange={this.answerFormSubmit} label='Enter Photo URL' placeholder='Photos' variant='outlined' fullWidth />
  //     //             </Grid>
  //     //             <Grid xs={12} item>
  //     //               <TextField onChange={this.answerFormSubmit} label='Enter Body' multiline rows={4} placeholder='Body' variant='outlined' fullWidth required />
  //     //             </Grid>
  //     //             <Grid xs={12} item>
  //     //               <Button type='submit' variant='contained' color='primary' fullWidth>Submit Answer</Button>
  //     //             </Grid>
  //     //           </Grid>
  //     //         </form>
  //     //       </CardContent>
  //     //     </Card>
  //     //   </Box>
  //     // )




  //     return !addAnswerClick ? (
  //       <Accordion defaultExpanded={true}>
  //         <AccordionSummary>
  //           <Typography variant='h5' align='center' >
  //             Q: {this.props.question.question_body}
  //           </Typography>
  //         </AccordionSummary>
  //         <AccordionDetails sx={{
  //           p: 0,
  //           m: 0,
  //         }}>
  //           <div> {answerBody.length === 0 ? (
  //             <div>
  //               <Typography onClick={this.helpfulQuestion} className='helpfulQuestion'>Helpful? Yes({this.props.question.question_helpfulness})</Typography>

  //               <Button
  //                 onClick={this.handleAnswer}
  //                 endIcon={<SendIcon />}
  //                 size='medium'
  //                 variant='outlined'
  //                 color='primary'
  //               >Add First Answer</Button>
  //             </div>
  //           ) : (
  //             <div>
  //               <Box sx={{
  //                 bgcolor: 'primary.main',
  //                 boxShadow: 10,
  //               }}>
  //                 {this.state.answerBody.map(item => {
  //                   var temp = new Date(item.date)
  //                   var date = temp.toString().substring(0, 16)
  //                   return <AnswerEntrie answers={item} key={item.answer_id} date={date} questionId={this.props.question.question_id} getAnswers={this.getAnswers} />
  //                 })}
  //               </Box>
  //               <Grid
  //                 display='inline'
  //                 container direction="row"
  //                 alignItems="right"
  //               >
  //                 <Grid item xs={12}>
  //                   <Typography onClick={this.helpfulQuestion} className='helpfulQuestion'>Helpful? Yes({this.props.question.question_helpfulness})</Typography>
  //                   <Button
  //                     onClick={this.handleAnswer}
  //                     endIcon={<SendIcon />}
  //                     size='small'
  //                     color='primary'
  //                   >Add Answer
  //                   </Button>
  //                   <div className='reportQuestion'>
  //                     <Button size='small' varient='text' disabled={this.state.btnDisabled} color='error' onClick={this.reportQuestion}>Report Question</Button>
  //                   </div>
  //                 </Grid>
  //               </Grid>
  //             </div>
  //           )}
  //           </div>
  //         </AccordionDetails>
  //       </Accordion>
  //     ) : (
  //       <Box
  //         sx={{
  //           bgcolor: '#bdbdbd',
  //           boxShadow: 6,
  //           borderRadius: 5,
  //           maxWidth: 700,
  //           margin: "0 auto",
  //           minWidth: 300,
  //         }}
  //       >
  //         <Typography variant='h5' align='center' sx={{ my: 3 }}>
  //           Q: {this.props.question.question_body}
  //         </Typography>
  //         <Card sx={{
  //           bgcolor: 'background.paper',
  //           boxShadow: 10,
  //         }} style={{ maxWidth: 600, margin: '0 auto' }}>
  //           <CardContent>
  //             <Button
  //               onClick={this.handleAnswer}
  //               size='small'
  //               sx={{
  //                 mb: 1
  //               }}
  //             ><ArrowBackIosNewIcon /></Button>
  //             <form onSubmit={this.addAnswer}>
  //               <Grid container spacing={1}>
  //                 <Grid xs={12} sm={6} item>
  //                   <TextField onChange={this.answerFormSubmit} label='Enter Name' placeholder='Name' variant='outlined' fullWidth required />
  //                 </Grid>
  //                 <Grid xs={12} sm={6} item>
  //                   <TextField onChange={this.answerFormSubmit} type='email' label='Enter Email' placeholder='Email' variant='outlined' fullWidth required />
  //                 </Grid>
  //                 <Grid xs={12} item>
  //                   <TextField onChange={this.answerFormSubmit} label='Enter Photo URL' placeholder='Photos' variant='outlined' fullWidth />
  //                 </Grid>
  //                 <Grid xs={12} item>
  //                   <TextField onChange={this.answerFormSubmit} label='Enter Body' multiline rows={4} placeholder='Body' variant='outlined' fullWidth required />
  //                 </Grid>
  //                 <Grid xs={12} item>
  //                   <Button type='submit' variant='contained' color='primary' fullWidth>Submit Answer</Button>
  //                 </Grid>
  //               </Grid>
  //             </form>
  //           </CardContent>
  //         </Card>
  //       </Box >
  //     )
  //   }
  // }



  // export default QnAEntrie;
  {/* <div>
  {this.state.answerBody.map(item => {
    var temp = new Date(item.date)
    var date = temp.toString().substring(0, 16)
    return <AnswerEntrie answers={item} key={item.answer_id} date={date} questionId={this.props.question.question_id} getAnswers={this.getAnswers}/>
  })}
  </div> */}