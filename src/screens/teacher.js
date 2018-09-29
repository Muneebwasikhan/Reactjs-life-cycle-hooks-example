import React from "react";

export default class Teacher extends React.Component {
  sendDataToKid() {
    const { updateSteps } = this.props;
    const furtherSteps = ["step3", "step4", "step5"];
    updateSteps(furtherSteps);
  }

  render() {
    return (
      <button onClick={this.sendDataToKid.bind(this)}>
        Get Help From Teacher
      </button>
    );
  }
}
