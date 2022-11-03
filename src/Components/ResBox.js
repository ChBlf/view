import React, {Component} from 'react';
import '../converter.css';

class ResBox extends Component{
    render(){
        
        return( 
            <div className={this.props.class} style={{"backgroundColor": this.props.rgb}}>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
export default ResBox