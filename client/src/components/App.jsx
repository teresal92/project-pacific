import React from 'react';
import QnACore from './Q&A/QnACore.jsx';
import ProductList from './ProductList.jsx'

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