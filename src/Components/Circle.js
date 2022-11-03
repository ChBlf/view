import React from 'react';
import '../index.css';

const Circle = (props) => {

    let styling = { backgroundColor: props.bgc, position: `absolute`, top: props.top, left: props.left, right: props.right, bottom: props.bottom, borderRadius: `50%`, height: props.h, width: props.w }
    
    if ( props.top === undefined ) delete styling.top;
    if ( props.left === undefined ) delete styling.left;
    if ( props.bottom === undefined ) delete styling.bottom;
    if ( props.right === undefined ) delete styling.right;

        return(
            <div id={props.id} style={styling}>

            </div>
        )
}
export default Circle