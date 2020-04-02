import React, { Component } from "react";
import { ResetButton } from "./PlaylistButtons/ResetButton/resetbutton-component";
import { RecordButton } from "./PlaylistButtons/RecordButton/recordbutton-component";
import { PlayButton } from "./PlaylistButtons/PlayButton/playbutton-component";
import { SaveButton } from "./PlaylistButtons/SaveButton/savebutton-component";
import { DownloadButton } from "./PlaylistButtons/DownloadButton/downloadbutton-component";
import { DrumKitSettings } from "./PlaylistButtons/DrumKitSettings/drumkit-panel-component";
import { LoopsPanel } from "./PlaylistButtons/LoopsPanel/loopspanel-component";
import PlayListPanel from "./PlaylistPanel/playlistpanel-component";

import "./playlist-component.css";

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.createConsole = this.createConsole.bind(this);
    
    this.state = {
      reset: false,
      record: false,
      play: false,
      save: false,
      download: false,
    };
  }

  createConsole() {
    this.setState((state) => ({
        play: !state.play, 
    }), () => console.log(this.state.play))
  }


  render() {
    return (
      <div className="trackArea">
        <div className="trackButtonPanel">
          <h1>Button Area</h1>
          <ResetButton />
          <RecordButton />
          <PlayButton testFunction={this.createConsole} />
          <SaveButton />
          <DownloadButton />
          <DrumKitSettings />
          <LoopsPanel />
        </div>
        <PlayListPanel playState = {this.state.play} />
      </div>
    );
  }
}
