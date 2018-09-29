import React from "react";

export default class Kid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: "nervous",
      danceSteps: [],
      currentStepIndex: 0,
      startedPerforming: false
    };
  }

  qualified() {
    console.log("stardPerFalse");
    const { unMount } = this.props;
    this.setState({ startedPerforming: false });

    unMount();
  }

  static getDerivedStateFromProps(props, state) {
    const danceSteps = [...state.danceSteps, ...props.furtherSteps];

    return {
      volume: 5,
      emotion: props.applaud || "Nervous",
      startedPerforming: danceSteps.length >= 5,
      danceSteps: state.danceSteps.length < 5 ? danceSteps : state.danceSteps
    };
  }
  componentDidUpdate(prevProps, prevState) {
    const { qualified } = this.props;
    if (prevProps.qualified !== qualified) {
      console.log(prevProps.qualified, this.props.qualified);
      qualified ? this.qualified() : console.log("not");
    }
  }
  componentWillUnmount() {
    const { unMountJudges } = this.props;
    console.log("unMountingJudges");
    unMountJudges();
  }

  componentDidMount() {
    const { danceSteps } = this.state;
    setTimeout(() => {
      this.setState({ danceSteps: ["step1", "step2"] });
    }, 5000);
  }

  render() {
    const { dressColor } = this.props;
    const {
      danceSteps,
      emotion,
      startedPerforming,
      volume,
      currentStepIndex
    } = this.state;

    console.log(volume, danceSteps);
    return (
      <div className="App">
        <div>dressColor: {dressColor}</div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }} />
        <div>Emotion: {emotion}</div>
        {startedPerforming && (
          <div>
            <div>Current Step: {danceSteps[currentStepIndex]}</div>
            <button
              onClick={() =>
                this.setState({ currentStepIndex: currentStepIndex + 1 })
              }
            >
              Perform Next Step
            </button>
          </div>
        )}
      </div>
    );
  }
}
Kid.defaultProps = { dressColor: "red", applaud: false, furtherSteps: [] };
