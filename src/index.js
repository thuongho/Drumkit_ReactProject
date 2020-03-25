import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Imports the Sound
import clap from '../sounds/clap.wav';
import hihat from '../sounds/hihat.wav';
import kick from '../sounds/kick.wav';
import openhat from '../sounds/openhat.wav';
import boom from '../sounds/boom.wav';
import ride from '../sounds/ride.wav';
import snare from '../sounds/snare.wav';
import tom from '../sounds/tom.wav';
import tink from '../sounds/tink.wav';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
