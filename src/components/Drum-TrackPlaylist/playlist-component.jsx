import React, { Component } from "react";
// import { ResetButton } from "./PlaylistButtons/ResetButton/resetbutton-component";
import { RecordButton } from "./PlaylistButtons/RecordButton/recordbutton-component";

import { SaveButton } from "./PlaylistButtons/SaveButton/savebutton-component";
import { DownloadButton } from "./PlaylistButtons/DownloadButton/downloadbutton-component";
import { DrumKitSettings } from "./PlaylistButtons/DrumKitSettings/drumkit-panel-component";
import { LoopsPanel } from "./PlaylistButtons/LoopsPanel/loopspanel-component";
import PlayListPanel from "./PlaylistPanel/playlistpanel-component";

import "./playlist-component.css";

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.clickPlayButton = this.clickPlayButton.bind(this);

    this.state = {
      reset: false,
      record: false,
      play: false,
      save: false,
      download: false,
      progress: 0,
    };
  }

  componentDidUpdate() {
    if (this.state.progress < 100 && this.state.play && this.state.reset === false) {
      setTimeout(
        () =>
          this.setState(
            (state) => ({
              progress: state.progress + 1,
            }),
            () => {
              console.log(this.state.progress);
            }
          ),
        40
      );
    }
  }

  //When user hits the Play Button
  clickPlayButton() {
    this.setState(
      (state) => ({
        play: !state.play, reset: false
      }),
      () => console.log(this.state.play, this.state.progress)
    );
  }

  //When user hits the Reset Button. I put -1 because componentDidUpdate runs after each setState
  clickResetButton() {
    this.setState({
      reset: true,
      play: false,
      progress: 0,
    });
  }

  render() {
    return (
      <div className="trackArea">
        <div className="trackButtonPanel">
          <h1>Button Area</h1>
          <button
            className="resetButton"
            onClick={() => {
              this.clickResetButton();
            }}
          >
            Reset Button
          </button>
          <RecordButton />
          <button
            className="playButton"
            onClick={() => {
              this.clickPlayButton();
            }}
          >
            Play Button
          </button>
          <SaveButton />
          <DownloadButton />
          <DrumKitSettings />
          <LoopsPanel  className="playListPanel"/>
        </div>
        <PlayListPanel
          playState={this.state.play}
          progress={this.state.progress}
        />
      </div>
    );
  }
}
