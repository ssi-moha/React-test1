import React, { Component } from 'react';
import './App.css';
import ColoredSquare from './components/colored_square';
import InputText from './components/input_text';
import ListText from './containers/list_text';

class App extends Component {
  state = {
    list: [],
    selectedElem: false,
    color: false
  }

  selectElement = (k) => {
    this.setState({selectedElem : k})
    this.setState({color : false})    
  }
  
  selectedColor = (color) => this.setState({color: color})

  newline = (input) => {
    this.setState({list: this.state.list.concat(input)});
  }


  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-2"></div>
            <div className="col-xs">
              <ColoredSquare selectColor={this.selectedColor} />
            </div>
            <div className="col-xs">            
              <InputText newline= {this.newline.bind(this)}/>
              <ListText list={this.state.list} selected={this.selectElement} elem={this.state.selectedElem} color={this.state.color} unset={this.state.unsetColor}/>
            </div>
            <div className="col-xs-3"></div>
        </div>
      </div>
    );
  }
}

export default App;
