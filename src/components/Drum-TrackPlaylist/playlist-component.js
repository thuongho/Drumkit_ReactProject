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
  }

  render() {
    return (
      <div className="TrackArea">
        <div className="TrackPanel">
          <h1>Button Area</h1>
          <ResetButton />
          <RecordButton />
          <PlayButton />
          <SaveButton />
          <DownloadButton />
          <DrumKitSettings />
          <LoopsPanel />
        </div>
        <div className = "PlaylistPanel">
          <PlayListPanel />
        </div>
      </div>
    );
  }
}
