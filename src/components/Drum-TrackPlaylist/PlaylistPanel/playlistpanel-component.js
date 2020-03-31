import React, { Component } from 'react';

import './playlistpanel-component.css';

export default class PlayListPanel extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="playlist-Panel">
                <h1>Playlist Panel</h1>
                <div className="progressWidth"></div>
                <div className="progressLine"></div>
                <div className="loader"> </div>
            </div>
        )
    }

}