import React, { useState } from 'react';
import '../css/index.css';
import ResBox from './ResBox';
import GetColor from './GetColor';

const Text = (props) => {

    let red = GetColor().red
    let green = GetColor().green
    let blue = GetColor().blue

    document.body.style = `background-color: rgba(${red}, ${green}, ${blue}, .35);`
    //
    
    let max = 255
    
    if (red > 200 && green > 200 && blue > 200) {
        max = 80
    }

    const iR = 0;
    const iG = 0;
    const iB = 0;

    const [redX, setRedX] = useState(iR)
    const [greenX, setGreenX] = useState(iG)
    const [blueX, setBlueX] = useState(iB)

    const enter = (event) => {
        var keyCode = ('which' in event) ? event.which : event.keyCode;
        if (keyCode === 13 && event.target.value !== '') {
            if ( event.target.id === 'hex' ) {
                const checkHex = (col) => {
                    const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(col);
                    return r ? true : false;
                }
                
                if (!checkHex(event.target.value)) return

                function hexToRgb(hex) {
                    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : null;
                }
                
                setRedX(hexToRgb(event.target.value).r)
                setGreenX(hexToRgb(event.target.value).g)
                setBlueX(hexToRgb(event.target.value).b)
            }
        }
    }

        return( 
            <div>
                <input type="text" id={props.id} placeholder={props.ph} onKeyDown={event => {enter(event)}}/>
                <ResBox rgb={`rgb(${red}, ${green}, ${blue})`} col={`rgba(${max}, ${max}, ${max}, .9)`} text={`${redX}, ${greenX}, ${blueX}`} class="resBoxHextoRGB" />
            </div>
        )
}
export default Text