import React from 'react';
import '../../css/index.css';
import GetColor from '../GetColor'

const Text = (props) => {
    const setCol = GetColor().setSearch

    let col = GetColor().col

    const enter = (event) => {
        var keyCode = ('which' in event) ? event.which : event.keyCode;
        if (keyCode === 13 && event.target.value !== '') {

            setCol({
                col: event.target.value
            })
        }
    }

        return( 
            <input type="text" id={props.id} placeholder={col} onKeyDown={event => {enter(event)}}/>
        )
}
export default Text