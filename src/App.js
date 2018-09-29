import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Kid from "./screens/kid";
import Teacher from "./screens/teacher";
import Judge from "./screens/judge";

class App extends Component {
  constructor() {
    super();
    this.state = {
      applaud: false,
      qualified: false,
      kidAvail: true,
      judgeAvail: true
    };
    this.updateSteps = this.updateSteps.bind(this);
    this.func = this.func.bind(this);
    this.qualified = this.qualified.bind(this);
    this.unMount = this.unMount.bind(this);
    this.unMountJudges = this.unMountJudges.bind(this);
  }
  qualified() {
    console.log("qualifiedAPPJS");
    this.setState({ qualified: true });
  }
  unMountJudges() {
    this.setState({ judgeAvail: false });
  }
  unMount() {
    this.setState({ kidAvail: false });
  }
  updateSteps(res) {
    this.setState({ furtherSteps: res });
    console.log(res);
  }
  func() {
    this.setState({ applaud: "happy" });
  }
  render() {
    const {
      furtherSteps,
      applaud,
      qualified,
      kidAvail,
      judgeAvail
    } = this.state;
    return (
      <div className="App">
        <h1>KID</h1>
        {kidAvail && (
          <Kid
            dressColor="yellow"
            furtherSteps={furtherSteps}
            unMountJudges={this.unMountJudges}
            applaud={applaud}
            unMount={this.unMount}
            qualified={qualified}
          />
        )}
        <br />
        <hr />
        <br />
        <h1>TEACHER</h1>
        <Teacher updateSteps={this.updateSteps} />
        <br />
        <hr />
        <br />
        {judgeAvail && (
          <Judge
            func={this.func}
            qualified={qualified}
            qualifiedStd={this.qualified}
          />
        )}
      </div>
    );
  }
}

export default App;
