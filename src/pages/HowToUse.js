import React from 'react';
import '../css/howTo.css';
import HowToBox from '../Components/HowTo/HowToBox';
import GetColor from '../Components/GetColor';

export default function HowToUse(){

        let red = GetColor().red
        let green = GetColor().green
        let blue = GetColor().blue

        let max = 255

        if (red > 200 && green > 200 && blue > 200) {
            max = 80
        }

        return(
        <div>
            <HowToBox rgb={`rgb(${red}, ${green}, ${blue})`} col={`rgba(${max}, ${max}, ${max}, .9)`} />
        </div>
        )

}