import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      name: '',
      email: '',
      photos: [],
    }
    this.answerFormSubmit = this.answerFormSubmit.bind(this);
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
    }
    console.log(this.state)
  }

  sendAnswer() {
    axios.post()
  }


  render() {
    return (
      <div>
        <div>
          <form>
            <input onChange={this.answerFormSubmit} type='text' placeholder='Name'></input>
            <input onChange={this.answerFormSubmit} type='text' placeholder='Body'></input>
            <input onChange={this.answerFormSubmit} type='text' placeholder='Email'></input>
            <button className='addQuestionButton'>Add Question</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Question;