import React from 'react';
import ReactDOM from "react-dom";

export class Tracker extends React.Component {
  onClick = (e) => {
    console.log(this.props.eventName)
  }
  remapChildren(children) {
    const { onClick } = this;

    return React.Children.map(
      children,
      child => {
        if (typeof child.type === 'string') {
          return React.cloneElement(child, { onClick });
        } else if (React.Children.count(child.props.children)) {
          return React.cloneElement(child, {
            children: this.remapChildren(child.props.children)
          });
        }
      }
    );
  }

  render() {
    return this.remapChildren(this.props.children);
  }

}
