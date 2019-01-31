import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Numbers from './Numbers/Numbers';

class App extends Component {
  state = {
      number_set: [
          {items: '1 2 3 4 5 6'},
      ]
  };

  changeNumbers = (new_number) => {
      console.log('Кнопка нажата, номера меняются');
      let newNumbers = {...this.state};
      newNumbers.number_set[0].items = new_number;
      this.setState(newNumbers);
  };

  random_numbers = () => {
    let randomNumbers = 12356

    //let randomNumbers: [
      //{items: "4 5 6 7"},
    //];
    return randomNumbers;
  }

//{Math.floor(Math.random() * 100) + 1}

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
  }
}

export default App;




