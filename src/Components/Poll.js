import React from 'react'
import './Poll.css'
import PollSvg from './PollSvg'
const Poll = () => {
    return (
        <div className="mainPoll">
            <h1 className="pollh1">Poll Results</h1>
            <div className="pollP">
                With the resurgence of Black Lives Matter in national headlines amid global protests, the movement has seen an increase in support in 2020.  Although they began from different perspectives, as per the New York Times' The Upshot, "all kinds of voters moved sharply in the direction of supporting the movement" just within the two weeks between late May and early June "as much as   ] had in the preceding two years."     Similarly, the Pew Research Center reports that "  t Americans express support for the Black Lives Matter movement."
                    <br />
                <br />
                According to Terrance Woodbury, a researcher of attitudes among young adults, "  movement has evolved from Black people vs. the police to young people vs. racism."   An online survey of people aged from 18-34 the Global Strategy Group found broad support from the participants, except by those who identified as pro-Trump Republicans.
                    <br />
                <br />
                Opal Tometi theorizes that increased support was the result of economic anxiety and contempt for the American government's handling of the COVID-19 Pandemic.    Protests led by Black Lives Matter eventually developed into a larger movement, with some crediting the organization as starting the early 21st-century civil rights movement and possibly "the largest movement in U.S. history".
            </div>
            <PollSvg />
        </div>
    )
}

export default Poll
