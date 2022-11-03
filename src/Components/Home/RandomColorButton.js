import React from 'react';
import '../../css/index.css';
import GetColor from '../GetColor'
import RandomColor from '../FallbackColors';
import ShuffleIcon from '@mui/icons-material/Shuffle';

const RandomColorButton = (props) => {
    const setCol = GetColor().setSearch

    let col = GetColor().col

    const enter = (event) => {
        document.location.href = `?col=${RandomColor}`
    }

    if (col == "ffffff") col = "dddddd"

        return( 
            <button id={props.id} onClick={event => {enter(event)}} style={{backgroundColor: `${col}5F`}} ><ShuffleIcon htmlColor={col} fontSize="large" /></button>
        )
}
export default RandomColorButton