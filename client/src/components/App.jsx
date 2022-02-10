import React from 'react';
import QnACore from './Q&A/QnACore.jsx'
class App extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <QnACore />
      </div>
    )
  }
}
export default App;