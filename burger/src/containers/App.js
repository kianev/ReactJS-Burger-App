import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor (props){
    super(props);
    console.log('App.js inside constructor', props);
    this.state = {
      persons: [
        {id: 1, name: 'Max', age: 22},
        {id: 2, name: 'Gosho', age: 33},
        {id: 3, name: 'Kiro', age: 30}
      ],
      showPersons: false,
      toggleCount: 0
    }
  }

  componentWillMount(){
    console.log('app.js componentwillmount');
  }

  componentDidMount(){
    console.log('app.js componentDidmount');
  }

  /*shouldComponentUpdate(nextProps, nextState){
    console.log('update app.js inside shouldComponentUpdate', nextProps, nextState);
    return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  }*/

  componentWillUpdate(nextProps, nextState){
    console.log('update app.js inside componentWillUpdate', nextProps, nextState);
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {...this.state.persons[personIndex]}
    //const person = Object.assign({}, this.state.persons[personIndex]) //older version

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //copies the array
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleCount: prevState.toggleCount + 1
      }
    })
  }

  render () {
    console.log('app.js inside render')

    let persons = null
    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    )
  }
}

export default App
