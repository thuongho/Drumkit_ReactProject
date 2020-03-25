import React, { Component } from 'react';
import Button from './Buttons/button-component';
import './Home.css';

//Import the Sound
// @ts-ignore
import clap from '../sounds/clap.wav';
// @ts-ignore
import hihat from '../sounds/hihat.wav';
// @ts-ignore
import kick from '../sounds/kick.wav';
// @ts-ignore
import openhat from '../sounds/openhat.wav';
// @ts-ignore
import boom from '../sounds/boom.wav';
// @ts-ignore
import ride from '../sounds/ride.wav';
// @ts-ignore
import snare from '../sounds/snare.wav';
// @ts-ignore
import tom from '../sounds/tom.wav';
// @ts-ignore
import tink from '../sounds/tink.wav';


export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='one'>
                    <Button 
                    className="drumKit clap"
                    smallText="A"
                    bigText="clap"
                    code={65}
                    source={clap}
                    />
                    <Button
                    className="drumKit hihat"
                    smallText="s"
                    bigText="hihat"
                    code={83}
                    source={hihat}
                    />
                    <Button
                    className="drumKit kick"
                    smallText="d"
                    bigText="kick"
                    code={68}
                    source={kick}
                    />
                    </div>
                    <div className='two'>
                    <Button
                    className="drumKit openhat"
                    smallText="f"
                    bigText="openhat"
                    code={70}
                    source={openhat}
                    />
                    <Button
                    className="drumKit boom"
                    smallText="g"
                    bigText="boom"
                    code={71}
                    source={boom}
                    />
                    <Button
                    className="drumKit ride"
                    smallText="h"
                    bigText="ride"
                    code={72}
                    source={ride}
                    />
                    </div>
                    <div className="three">
                    <Button
                    className="drumKit snare"
                    smallText="j"
                    bigText="snare"
                    code={74}
                    source={snare}
                    />
                    <Button
                    className="drumKit tom"
                    smallText="k"
                    bigText="tom"
                    code={75}
                    source={tom}
                    />
                    <Button
                    className="drumKit tink"
                    smallText="l"
                    bigText="tink"
                    code={76}
                    source={tink}
                    />>
                    </div>
                </div>
        )
    }
}

