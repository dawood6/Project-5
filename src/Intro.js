import React from 'react'
import Navbar from './Navbar'
import './Intro.css'
import IntroSvg from './IntroSvg'
const Intro = () => {
    return (
        <div className="IntroCon">
            <Navbar />
            <p className="IntroP">
                <b>Black Lives Matter (BLM)</b> is a decentralized movement in the United States advocating for non-violent civil disobedience in protest against incidents of police brutality and all racially motivated violence against African-American people.An organization known simply as Black Lives Matter exists as a decentralized network with about 16 chapters in the United States and Canada, while a larger Black Lives Matter movement exists consisting of various separate like-minded organizations such as Dream Defenders and Assata's Daughters. The broader movement and its related organizations typically advocate against police violence towards black people, as well as for various other policy changes considered to be related to black liberation.
            </p>
            <IntroSvg />
        </div>
    )
}

export default Intro
