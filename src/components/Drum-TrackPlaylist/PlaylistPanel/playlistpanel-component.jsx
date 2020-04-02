import React, { Component } from "react";

import "./playlistpanel-component.css";

export default class PlayListPanel extends Component {
  constructor(props) {
    super(props);

    this.changeWidth = this.changeWidth.bind(this);

    this.state = {
      checkValid: this.props.playState,
      count: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.playState !== prevState.checkValid) {
      return { checkValid: nextProps.playState };
    } else return null;
  }

  changeWidth() {
    this.setState({ count: 2 });
  }

  render() {
    return (
      <div className="playlist-Panel">
        <div
          className="progressWidth"
          style={{ width: `${this.state.count}%` }}
        ></div>
        <div className="progressLine"></div>
        <div className="loader"> </div>
      </div>
    );
  }
}
