import React from "react";

class SeasonDisplay extends React.Component {
  seasonConfig = {
    summer: {
      text: "",
      icon: "",
    },
    winter: {
      text: "",
      icon: "",
    },
  };

  render() {
    return <h1>{this.props.lat}</h1>;
  }
}

export default SeasonDisplay;
