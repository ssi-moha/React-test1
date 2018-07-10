import React, { Component } from 'react';
import '../App.css';


class ListTextItem extends Component {
    constructor(props){
        super(props)

        this.id = this.props.id
        this.state = { 
            select : false,
            border : '0px'
        };
    }

    render(){   
        return (
            <div className="row"  id={this.id} style={{padding: '10px', cursor: 'pointer', backgroundColor: this.props.elem ? this.props.color : 'none', border: this.props.elem ? '1px solid' : '0px'}} onClick={() => this.props.selectElem(this.props.id)}>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default ListTextItem;