import React from 'react';
import GetColor from '../Components/GetColor';

export default function Colorpalette(){

        let red = GetColor().red
        let green = GetColor().green
        let blue = GetColor().blue

        let max = 255

        if (red > 200 && green > 200 && blue > 200) {
            max = 80
        }

        document.body.style = `background-color: rgba(${red}, ${green}, ${blue}, .35);`        

        return(
        <div>
        </div>
        )

}