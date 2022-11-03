import React from 'react';
import ColorView from '../Components/ColorView';
import Text from '../Components/Text';
import Circle from '../Components/Circle';
import PercentPanel from '../Components/PercentPanel';
import '../css/index.css';
import RandomColorButton from '../Components/RandomColorButton';
import Navbar from '../Components/Navbar';
import GetColor from '../Components/GetColor';


function Home(){
        
        const halfCH = 200
    
        let col = GetColor().col

        let red = GetColor().red
        let green = GetColor().green
        let blue = GetColor().blue

        document.body.style = `background-color: rgba(${red}, ${green}, ${blue}, .35);`
    
        return(
        <div>
            <ColorView></ColorView>
            <Text id="colText"></Text>
            <Circle bgc={"rgba("+red+","+green+","+blue+")"} right="-20vh" bottom="-20vh" h="45vh" w="45vh" id="bottom"></Circle>
            <Circle bgc={"rgba("+red+","+green+","+blue+", .55)"} right="-18vh" bottom="-18vh" h="22vw" w="22vw" id="bottomShadow"></Circle>
            <Circle bgc={"rgba("+red+","+green+","+blue+", .45)"} right="0vh" bottom="50vh" h={halfCH + "vh"} w={halfCH/2 + "vw"} id="HomeCirc"></Circle>
            <Navbar></Navbar>
            <RandomColorButton id="rcb" />
            <div id="onlyMob" style={{backgroundColor: `rgba(${red},${green}, ${blue}, .7)`}}></div>
            <PercentPanel></PercentPanel>
        </div>
        )

    }

export default Home