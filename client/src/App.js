import React, { Component } from 'react';
import CardList from './components/Card/CardList';
import MainBox from './components/MainBox/MainBox';
import './App.css';

const API_URL = 'http://3.82.19.211:8000';

const initialState = {
  input: '',
  input2: '',
  stores: [],  
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onInputChange2 = (event) => {
    this.setState({input2: event.target.value});
  }

  onButtonSubmit = () => {
    fetch(`${API_URL}/search`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input,
          input2: this.state.input2
        })
      })
      .then(response => response.json())      
      .then(data => {this.setState({ stores: data})}) 
      .catch(err => console.log(err))      
  }

  render() {
    const { stores } = this.state;
    return (
      <div className="App">
          <div>
              <MainBox
                onInputChange={this.onInputChange}
                onInputChange2={this.onInputChange2}
                onButtonSubmit={this.onButtonSubmit}
              />
              <CardList stores={stores} />
            </div>          
      </div>
    );
  }
}

export default App;
