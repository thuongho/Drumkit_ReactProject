import React, { Component } from "react";
import { MySounds } from './MySounds-Button/mysounds-component';
import { FeaturedSounds } from './FeaturedSounds-Button/featuredsounds-component';
import { ShopButton } from './Shop-Button/shop-component';
import { AboutButton } from './About-Button/aboutbutton-component';

import "./topbutton-component.css";

export default class TopButton extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className='TopButton' >
                <h1>
                    Top Buttons
                </h1>
                <MySounds />
                <FeaturedSounds />
                <ShopButton />
                <AboutButton />
            </div>
        )
    }
}
