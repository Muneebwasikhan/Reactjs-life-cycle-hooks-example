import React, { Component } from "react";

export default class Judge extends React.Component {
  constructor() {
    super();
    this.state = { stars: 0, available: false };
    this.applaud = this.applaud.bind(this);
    this.provideStars = this.provideStars.bind(this);
  }

  applaud() {
    const { func } = this.props;
    func();
  }

  provideStars() {
    const { stars } = this.state;
    if (stars < 5) {
      this.setState({ stars: stars + 1 });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.stars <= 5;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("compdidupdate", prevProps, prevState);
    const { qualifiedStd } = this.props;
    const { stars, qualified } = this.state;
    if (stars >= 5 && prevState.qualified !== this.props.qualified) {
      this.setState({ qualified: true });
      alert("qualified");
      console.log(qualifiedStd);
      qualifiedStd();
    }
  }

  render() {
    const { stars, available, qualified } = this.state;

    return (
      <div>
        <button type="button" onClick={this.applaud}>
          Appreciate performance
        </button>
        <button type="button" onClick={this.provideStars}>
          Provide stars
        </button>
        Kid is available: {available}
        Stars gained: {stars}
      </div>
    );
  }
}
