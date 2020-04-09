import React, { Component } from "react";

import "./playlistpanel-component.css";

export default class PlayListPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Checks whether play button is pressed
      playValue: this.props.playState,
      recordValue: this.props.recordState,
      code: this.props.panelCode,
      source: this.props.panelSource,
    };

    this.createLoop = this.createLoop.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.playState !== prevState.playValue ||
      nextProps.recordState !== prevState.recordValue
    ) {
      return {
        playValue: nextProps.playState,
        recordValue: nextProps.recordState,
      };
    } else return null;
  }

  //Only Activates when the Record Button is Pressed (true)
  createLoop() {
    if (this.state.recordValue) {
      return <div className="loop">Hello Mate</div>;
    }
  }

  render() {
    // //CreateLoop creates the div row when Play Button is pressed
    // let createLoop;
    // if (this.state.playValue) {
    //   createLoop = <div className="loop">Hello</div>;
    // }
    return (
      <div className="playlist-Panel">
        <div
          className="progressWidth"
          style={{ width: `${this.props.progress}%` }}
        ></div>
        <div
          className="progressLine"
          style={{ left: `${this.props.progress}%` }}
        ></div>
        <div className="loader"></div>
        {this.createLoop()}
        <div>{this.state.source}</div>
      </div>
    );
  }
}
