import React from 'react';
import '../css/converter.css';
import RandomColor from '../Components/FallbackColors';
import Input from '../Components/Converter/Input';
import GetColor from '../Components/GetColor';

export default function Converter(){    
        let col = GetColor().col

        let red = GetColor().red
        let green = GetColor().green
        let blue = GetColor().blue

        let max = 255
        
        if (red > 200 && green > 200 && blue > 200) {
            max = 80
        }

        return(
        <div>
            <p id='infoWarn'>Entering hex codes to convert will not change the background and the theme being used ({col}) will remain</p>
            <Input id="hex" ph="Enter Hex" />
        </div>
        )

}