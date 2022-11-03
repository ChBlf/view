import React from 'react';
import '../../css/index.css';
import GetColor from '../GetColor';


const ColorView = (props) => {
    
        let red = GetColor().red
        let green = GetColor().green
        let blue = GetColor().blue

        return( 
            <div className="viewBox" style={{"backgroundColor": `rgb(${red}, ${green}, ${blue})`}}></div>
        )
}
export default ColorView