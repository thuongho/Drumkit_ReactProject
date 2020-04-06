import React, { Component } from "react";
import Button from "./Drum-Buttons/button-component";
import Playlist from "./Drum-TrackPlaylist/playlist-component";
import TopButton from "./Top-Bottons/topbutton-component";
import "./Home.css";

//Import the Sound
// @ts-ignore
import clap from "../sounds/clap.wav";
// @ts-ignore
import snap from "../sounds/snap.mp3";
// @ts-ignore
import ride from "../sounds/ride.wav";
// @ts-ignore
import snare1 from "../sounds/snare2.mp3";
// @ts-ignore
import snare2 from "../sounds/snare4.mp3";
// @ts-ignore
import snare808 from "../sounds/snare-808.wav";
// @ts-ignore
import snarebig from "../sounds/snare-big.wav";
// @ts-ignore
import snarebrute from "../sounds/snare-brute.wav";
// @ts-ignore
import snarelofi from "../sounds/snare-lofi02.wav";
// @ts-ignore
import snaremodular from "../sounds/snare-modular.wav";
// @ts-ignore
import snaresumo from "../sounds/snare-sumo.wav";
// @ts-ignore
import stick from "../sounds/stick.mp3";
// @ts-ignore
import hat from "../sounds/hat.mp3";
// @ts-ignore
import hihat from "../sounds/hihat.wav";
// @ts-ignore
import claves from "../sounds/claves.mp3";
// @ts-ignore
import triangle from "../sounds/triangle.mp3";
// @ts-ignore
import shaker1 from "../sounds/shaker-shuffle.wav";
// @ts-ignore
import crash1 from "../sounds/crash.mp3";
// @ts-ignore
import crash2 from "../sounds/crash-tape.wav";
// @ts-ignore
import conga1 from "../sounds/conga.mp3";
// @ts-ignore
import conga2 from "../sounds/conga2.mp3";
// @ts-ignore
import cowbell1 from "../sounds/cowbell-808.wav";
// @ts-ignore
import perc1 from "../sounds/perc-hollow.wav";
// @ts-ignore
import perc2 from "../sounds/perc-nasty.wav";
// @ts-ignore
import tom from "../sounds/tom.wav";
// @ts-ignore
import tom2 from "../sounds/tom2.mp3";
// @ts-ignore
import tom808 from "../sounds/tom-808.wav";
// @ts-ignore
import tom4 from "../sounds/tom-analog.wav";
// @ts-ignore
import tomfm from "../sounds/tom-fm.wav";
// @ts-ignore
import tom6 from "../sounds/tom-rototom.wav";
// @ts-ignore
import tom7 from "../sounds/tom-short.wav";
// @ts-ignore
import click from "../sounds/click.mp3";
// @ts-ignore
import elephant from "../sounds/elephant.mp3";
// @ts-ignore
import gun from "../sounds/gun.mp3";
// @ts-ignore
import moan from "../sounds/moan.mp3";
// @ts-ignore
import kick from "../sounds/kick.mp3";
// @ts-ignore
import kick2 from "../sounds/kick2.mp3";
// @ts-ignore
import kick3 from "../sounds/kick-808.wav";
// @ts-ignore
import kickbig from "../sounds/kick-big.wav";
// @ts-ignore
import kick5 from "../sounds/kick-classic.wav";
// @ts-ignore
import kick6 from "../sounds/kick-deep.wav";
// @ts-ignore
import kick7 from "../sounds/kick-heavy.wav";
// @ts-ignore
import kick8 from "../sounds/kick-plain.wav";
// @ts-ignore
import kick9 from "../sounds/kick-zapper.wav";
// @ts-ignore
import kick10 from "../sounds/kick-softy.wav";
// @ts-ignore
import airhorn from "../sounds/airhorn.mp3";
// @ts-ignore
import allhits from "../sounds/allthehits.mp3";
// @ts-ignore
import djkhaled from "../sounds/khaled.mp3";
// @ts-ignore
import yeah from "../sounds/aweyeah.mp3";
// @ts-ignore
import damn from "../sounds/damnson.mp3";
// @ts-ignore
import rickross from "../sounds/ross.mp3";
// @ts-ignore
import beaches from "../sounds/rise.mp3";
// @ts-ignore
import whip from "../sounds/whip.mp3";
// @ts-ignore
import ugh from "../sounds/ugh.mp3";

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="main">
        <TopButton />
        <div className="displayGrid">
          <div className="one">
            <Button
              className="drumKit clap"
              smallText="1"
              bigText="clap"
              code={49}
              source={clap}
            />
            <Button
              className="drumKit snap"
              smallText="2"
              bigText="snap"
              code={50}
              source={snap}
            />
            <Button
              className="drumKit ride"
              smallText="3"
              bigText="ride"
              code={51}
              source={ride}
            />
            <Button
              className="drumKit snare1"
              smallText="4"
              bigText="snare1"
              code={52}
              source={snare1}
            />
            <Button
              className="drumKit snare2"
              smallText="5"
              bigText="snare2"
              code={53}
              source={snare2}
            />
            <Button
              className="drumKit snare808"
              smallText="6"
              bigText="snare808"
              code={54}
              source={snare808}
            />
            <Button
              className="drumKit snarebig"
              smallText="7"
              bigText="snare4"
              code={55}
              source={snarebig}
            />
            <Button
              className="drumKit snarebrute"
              smallText="8"
              bigText="snare5"
              code={56}
              source={snarebrute}
            />
            <Button
              className="drumKit snarelofi02"
              smallText="9"
              bigText="snare6"
              code={57}
              source={snarelofi}
            />
            <Button
              className="drumKit snaremodular"
              smallText="0"
              bigText="snare7"
              code={48}
              source={snaremodular}
            />
            <Button
              className="drumKit snaresumo"
              smallText="-"
              bigText="snare8"
              code={189}
              source={snaresumo}
            />
            <Button
              className="drumKit stick"
              smallText="="
              bigText="stick"
              code={187}
              source={stick}
            />
          </div>
          <div className="two">
            <Button
              className="drumKit hat"
              smallText="q"
              bigText="hat"
              code={81}
              source={hat}
            />
            <Button
              className="drumKit hihat"
              smallText="w"
              bigText="hihat"
              code={87}
              source={hihat}
            />
            <Button
              className="drumKit claves"
              smallText="e"
              bigText="claves"
              code={69}
              source={claves}
            />
            <Button
              className="drumKit triangle"
              smallText="r"
              bigText="triangle"
              code={82}
              source={triangle}
            />
            <Button
              className="drumKit shakershuffle"
              smallText="t"
              bigText="shaker1"
              code={84}
              source={shaker1}
            />
            <Button
              className="drumKit crash2"
              smallText="y"
              bigText="crash1"
              code={89}
              source={crash1}
            />
            <Button
              className="drumKit crashtape"
              smallText="u"
              bigText="crash2"
              code={85}
              source={crash2}
            />
            <Button
              className="drumKit conga2"
              smallText="i"
              bigText="conga1"
              code={73}
              source={conga1}
            />
            <Button
              className="drumKit conga4"
              smallText="o"
              bigText="conga2"
              code={79}
              source={conga2}
            />
            <Button
              className="drumKit cowbell808"
              smallText="p"
              bigText="cowbell1"
              code={80}
              source={cowbell1}
            />
            <Button
              className="drumKit perchollow"
              smallText="["
              bigText="perc1"
              code={219}
              source={perc1}
            />
            <Button
              className="drumKit percnasty"
              smallText="]"
              bigText="perc2"
              code={221}
              source={perc2}
            />
          </div>
          <div className="three">
            <Button
              className="drumKit tom"
              smallText="a"
              bigText="tom"
              code={65}
              source={tom}
            />
            <Button
              className="drumKit tom2"
              smallText="s"
              bigText="tom2"
              code={83}
              source={tom2}
            />
            <Button
              className="drumKit tom808"
              smallText="d"
              bigText="tom808"
              code={68}
              source={tom808}
            />
            <Button
              className="drumKit tomanalog"
              smallText="f"
              bigText="tom4"
              code={70}
              source={tom4}
            />
            <Button
              className="drumKit tomfm"
              smallText="g"
              bigText="tom5"
              code={71}
              source={tomfm}
            />
            <Button
              className="drumKit tomrototom"
              smallText="h"
              bigText="tom6"
              code={72}
              source={tom6}
            />
            <Button
              className="drumKit tomshort"
              smallText="j"
              bigText="tom7"
              code={74}
              source={tom7}
            />
            <Button
              className="drumKit click"
              smallText="k"
              bigText="click"
              code={75}
              source={click}
            />
            <Button
              className="drumKit elephant"
              smallText="l"
              bigText="elephant"
              code={76}
              source={elephant}
            />
            <Button
              className="drumKit gun"
              smallText=";"
              bigText="gun"
              code={186}
              source={gun}
            />
            <Button
              className="drumKit moan"
              smallText="'"
              bigText="moan"
              code={222}
              source={moan}
            />
          </div>
          <div className="four">
            <Button
              className="drumKit kick"
              smallText="z"
              bigText="kick1"
              code={90}
              source={kick}
            />
            <Button
              className="drumKit kick3"
              smallText="x"
              bigText="kick2"
              code={88}
              source={kick2}
            />
            <Button
              className="drumKit kick808"
              smallText="c"
              bigText="kick3"
              code={67}
              source={kick3}
            />
            <Button
              className="drumKit kick-big"
              smallText="v"
              bigText="kick4"
              code={86}
              source={kickbig}
            />
            <Button
              className="drumKit kick-classic"
              smallText="b"
              bigText="kick5"
              code={66}
              source={kick5}
            />
            <Button
              className="drumKit kick-deep"
              smallText="n"
              bigText="kick6"
              code={78}
              source={kick6}
            />
            <Button
              className="drumKit kick-heavy"
              smallText="m"
              bigText="kick7"
              code={77}
              source={kick7}
            />
            <Button
              className="drumKit kick-plain"
              smallText=","
              bigText="kick8"
              code={188}
              source={kick8}
            />
            <Button
              className="drumKit kick-zapper"
              smallText="."
              bigText="kick9"
              code={190}
              source={kick9}
            />
            <Button
              className="drumKit kick-softly"
              smallText="/"
              bigText="kick10"
              code={191}
              source={kick10}
            />
          </div>
        </div>

        <div className="numGrid">
          <div className="numOne">
            <Button
              className="drumKit airhorn"
              smallText="7"
              bigText="airhorn"
              code={103}
              source={airhorn}
            />
            <Button
              className="drumKit allhits"
              smallText="8"
              bigText="allhits"
              code={104}
              source={allhits}
            />
            <Button
              className="drumKit anotherone"
              smallText="9"
              bigText="Khaled"
              code={105}
              source={djkhaled}
            />
          </div>
          <div className="numTwo">
            <Button
              className="drumKit yeah"
              smallText="4"
              bigText="yeah"
              code={100}
              source={yeah}
            />
            <Button
              className="drumKit damnson"
              smallText="5"
              bigText="Damn"
              code={101}
              source={damn}
            />
            <Button
              className="drumKit rickross"
              smallText="6"
              bigText="rickRoss"
              code={102}
              source={rickross}
            />
          </div>
          <div className="numThree">
            <Button
              className="drumKit beaches"
              smallText="1"
              bigText="beaches"
              code={97}
              source={beaches}
            />
            <Button
              className="drumKit whip"
              smallText="2"
              bigText="whip"
              code={98}
              source={whip}
            />
            <Button
              className="drumKit ugh"
              smallText="3"
              bigText="ugh"
              code={99}
              source={ugh}
            />
          </div>
        </div>
        <Playlist />
      </div>
    );
  }
}
