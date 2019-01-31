import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Numbers from './Numbers/Numbers';
import _ from 'lodash';

class App extends Component {
  state = {
      number_set: [
          {items:  []},
      ]
  };

  changeNumbers = (new_numbers) => {
      console.log('Кнопка нажата, номера меняются');
      let newNumbers = {...this.state};
      newNumbers.number_set[0].items = new_numbers;
      this.setState(newNumbers);
  };


  random_numbers = () => {
    let randomNumbers = [];
    let i = 0;

    for (let n=5; n < 37; n++) {
      randomNumbers[i] = n;
      i = i + 1;
    };


    let randomNumbers1 = [];
    randomNumbers1 = _.shuffle(randomNumbers);



    let randomNumbers2 = [];
    for (let i=0; i < 5; i++) {
      randomNumbers2[i] = randomNumbers1[i];
    };


    randomNumbers2.sort(function(a, b){return a -b })

    return randomNumbers2;

  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Numbers items={this.state.number_set[0].items} />

        <div>
          <button onClick={() => this.changeNumbers(this.random_numbers())}>New numbers</button>
        </div>
      </div>
    );
  };

}

export default App;



