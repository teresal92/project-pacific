import React from 'react';
import QnAEntrie from './QnAEntrie.jsx';
const QnAList = ({data}) => {
  return(
    <div>
      <div>
        {data.results.map((item) => {
          return <QnAEntrie qObj={item} key={item.question_id} id={item.question_id}/>
        })}
      </div>
    </div>
  )
}

export default QnAList;