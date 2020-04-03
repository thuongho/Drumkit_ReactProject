import React, { Component } from "react";


import "./playlistpanel-component.css";

export default class PlayListPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkValid: this.props.playState,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.playState !== prevState.checkValid) {
      return { checkValid: nextProps.playState };
    } else return null;
  }

  render() {
    return (
      <div className="playlist-Panel">
        <div className="progressWidth" style={{width: `${this.props.progress}%`}}></div>
        <div className="progressLine"></div>
        <div className="loader"> </div>
      </div>
    );
  }
}
