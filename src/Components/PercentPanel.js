import React from 'react';
import '../index.css';
import GetColor from './GetColor';

const PercentPanel = (props) => {

    let red = GetColor().red
    let green = GetColor().green
    let blue = GetColor().blue
    
    const redP = `${(100*(red/255)).toFixed(1)}%`
    const greenP = `${(100*(green/255)).toFixed(1)}%`
    const blueP = `${(100*(blue/255)).toFixed(1)}%`

        return( 
            <div id="percentPanel" style={{"backgroundColor": `rgba(${red}, ${green}, ${blue}, .4)`}}>
                <div id='red'>
                    {redP}
                    <div id='rb'></div>
                </div>
                <div id='green'>
                    {greenP}
                    <div id='gb'></div>
                </div>
                <div id='blue'>
                    {blueP}
                    <div id='bb'></div>
                </div>
            </div>
        )
}
export default PercentPanel