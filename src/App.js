import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader from "./components/Loader";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      error: "",
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (location) =>
        this.setState({
          location: location.coords.latitude,
        }),
      (error) => {
        this.setState({
          error: error.message,
        });
      }
    );
  }

  renderContent() {
    if (this.state.error && !this.state.location) {
      return <h1>Error: {this.state.error}</h1>;
    }

    if (!this.state.error && this.state.location) {
      return <SeasonDisplay lat={this.state.location} />;
    }

    return <Loader />;
  }

  render() {
    return this.renderContent();
  }
}

export default App;
