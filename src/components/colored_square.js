import React, {Component} from 'react';
import {Col} from "react-flexbox-grid";

class ColoredSquare extends Component {
    render(){
        return(
            <div className="col-xs-1">
                <div style={{height: '50px', width: '50px', margin: '50px', backgroundColor: 'blue'}} onClick={() => this.props.selectColor('blue')} ></div>
                <div style={{height: '50px', width: '50px', margin: '50px', backgroundColor: 'grey'}} onClick={() => this.props.selectColor('grey')} ></div>
                <div style={{height: '50px', width: '50px', margin: '50px', backgroundColor: 'red'}} onClick={() => this.props.selectColor('red')} ></div>
            </div>
        )
    }

}

export default ColoredSquare;
