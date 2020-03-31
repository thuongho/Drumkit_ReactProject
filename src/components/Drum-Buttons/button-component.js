import React, { Component, ReactPropTypes } from "react";
import "./button-component-style.css";

//App creates the Button Components
class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._playSound = this._playSound.bind(this);
    this._onTransitionEnd = this._onTransitionEnd.bind(this);
  }

  //What Happens when Component is mounted
  componentDidMount() {
    window.addEventListener("keydown", this._playSound);
    this.Audio = new Audio(this.props.source);
  }

  //Removes EL before component is destroyed.
  componentWillUnmount() {
    window.removeEventListener("keydown", this._playSound);
    
  }

  _playSound(event) {
    if (event.keyCode === this.props.code || event.type === "click") { // Checks if the button pressed has the same source 
      this.setState({ isPlaying: true });
      this.Audio.currentTime = 0;
      this.Audio.play();
    }
  }


  _onTransitionEnd(event) {
    this.setState({ isPlaying: false });
  }

  render() {
    const { style, bigText, smallText, className } = this.props;
    const isPlaying = this.state.isPlaying
      ? `${className} isPlaying`
      : `${className}`;
    return (
      <button
        onClick={this._playSound}
        onTransitionEnd={this._onTransitionEnd}
        className={isPlaying}
        style={style}
      >
        <kbd>{smallText}</kbd>
        <span>{bigText}</span>
      </button>
    );
  }
}



export default Button;
