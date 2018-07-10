import React, {Component} from 'react';

class InputText extends Component {
    constructor(props){
        super(props)
        this.state = {InText: ''}
    }

    handleChange(e){
        this.setState({InText:e.target.value});
        
    }

    handleSub(e){
       this.props.newline(this.state.InText)
        this.setState({Intext: ''})
        e.preventDefault();   
    }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSub.bind(this)}>
                    <input type='text' value={this.state.InText} onChange={this.handleChange.bind(this)} ></input>
                    <input type='submit' value="Submit" ></input>
                </form>
            </div>
        )
    }

   
}

export default InputText;