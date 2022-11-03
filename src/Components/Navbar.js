import React from 'react';
import '../css/index.css';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PaletteIcon from '@mui/icons-material/Palette';
import CodeIcon from '@mui/icons-material/Code';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import GetColor from './GetColor';
import { Link } from "react-router-dom";

const Navbar = () => {
    
    let col = GetColor().col

        return( 
            <div id="nav">
                <div id="navbar-links">
                    <div id="logo"><Link to={`/home?col=${col.replace('#', '')}`}><img src={require('../logoCir.png')} alt="logo" /></Link></div>
                    <div id="sourcecode"><a href='https://replit.com/@Blfr/view?v=1'><CodeIcon htmlColor={col}/></a></div>
                    <div id="colorpalette"><Link to={`/colorpalette?col=${col.replace('#', '')}`}><PaletteIcon htmlColor={col}/></Link></div>
                    <div id="convert"><Link to={`/convert?col=${col.replace('#', '')}`}><SwapHorizIcon htmlColor={col}/></Link></div>
                    <div id="how"><Link to={`/how?col=${col.replace('#', '')}`}><QuestionMarkIcon htmlColor={col}/></Link></div>
                </div>
            </div>
        )
}
export default Navbar