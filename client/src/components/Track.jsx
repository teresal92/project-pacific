import React from "react";
import ReactDOM from "react-dom";

// Higher Order Component (track)
class Track extends React.Component {
  onClick = (e) => {
    console.log(`[track] ${this.props.eventName}`);
    // make post request to /interactions API with 3 parameters:
    // element (string): selector of element that was clicked
    // widget (string): name of module/widget in which click occurred
    // time (string): time interaction occurred
  }

  render() {
    // cloning this.props.children and passing in props
    return (
      <React.Fragment>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(this.props.children, props)
        })}
      </React.Fragment>
    )
  }
};

<Track>
  <Component />
</Track>


// return React.Children.map(this.props.children, c =>
//   React.cloneElement(c, {
//     onClick: this.onClick.bind(c, c.props.onClick)
//   })
// );


export default Track;