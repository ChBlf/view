import React from 'react';
import '../nopage.css'
import GetColor from '../Components/GetColor';

export default function NoPage(){

        let red = GetColor().red
        let green = GetColor().green
        let blue = GetColor().blue

        let max = 255

        if (red > 180 && green > 180 && blue > 180) {
            max = 80
        }

        document.body.style = `background-color: rgba(${red}, ${green}, ${blue}, .35)`

        return(
        <div>
            <h1 style={{color: `rgba(${max}, ${max}, ${max}, .9)`}}>404</h1>
            <h3 style={{color: `rgba(${max}, ${max}, ${max}, .9)`}}>Page not found!</h3>
        </div>
        )

}