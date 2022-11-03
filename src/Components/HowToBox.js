import React, {Component} from 'react';
import '../howTo.css';

class HowToBox extends Component{
render(){

        return( 
            <div className="howToBox" style={{"backgroundColor": this.props.rgb}}>
                <h1 style={{"color": this.props.col}}> - How To Use - </h1>
                <p style={{"color": this.props.col}}><strong>Enter a hex code in the hex input to view that color.</strong></p>
                <p style={{"color": this.props.col}}><strong>Instead of the hex input, you can also put ?col=yourhex to view it (without #)</strong></p>
                <p style={{"color": this.props.col}}><strong>Anything which is not a hex code will not be processed and a random color would be shown.</strong></p>
            </div>
        )
    }
}
export default HowToBox