import React from "react";
import ReactDOM from "react-dom";

const axios = require('axios');

// Wrapper Component
// passes states and methods to childdren components
class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.trackClick = this.trackClick.bind(this);
  }

  // on click make post request to /interactions API with 3 parameters:
  //   // element (string): selector of element that was clicked
  //   // widget (string): name of module/widget in which click occurred
  //   // time (string): time interaction occurred

  trackClick = (e, widget) => {
    console.log('event: ', e);
    console.log('track: ', e.target);
    console.log('timestamp: ', e.timeStamp)
    console.log('widget: ', widget);
    let body = {
      element: e.target,
      time: e.timeStamp,
      widget
    };

    axios.post('/api/interactions', body)
      .then(res => console.log('successfully posted interaction'))
      .catch(err => console.error(`Error: ${err}`));
  }

  render() {
    // cloning this.props.children and passing in props
    return (
      <>
        {this.props.render(this.trackClick)}
      </>
    )
  }
};

export default Track;