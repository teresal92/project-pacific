import React from 'react';
import SearchAnswers from './SearchAnswers.jsx';
import QnAList from './QnAList.jsx';
import AddQnA from './AddQnA.jsx';

class QnACore extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }




  render() {
    return(
      <div>
        <div>
          <SearchAnswers />
          <QnAList />
          <AddQnA />
        </div>
      </div>
    )
  }
}
export default QnACore;