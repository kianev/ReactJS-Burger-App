import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 22},
      {name: "Gosho", age: 33},
      {name: "Kiro", age: 30}
    ]
  };

 switchNameHandler = (newName) => {
  this.setState({
    persons: [
      {name: newName, age: 22},
      {name: "Gosho", age: 23},
      {name: "Kiro", age: 33}
    ]
  })
 };

 nameChangedHandler = (event) => {
   this.setState({
     persons: [
       {name: "Max", age: 22},
       {name: event.target.value, age: 23},
       {name: "Kiro", age: 33}
     ]
   })
 };

  render() {
    let styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi I am a React App</h1>
        <p>this is working</p>
        <button
          style={styles}
          onClick={() => this.switchNameHandler("Pesho")}>Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Pesho!")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
