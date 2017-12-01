import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor (props){
    super(props);
    console.log('Persons.js inside constructor', props);
  }

  componentWillMount(){
    console.log('Persons.js componentwillmount');
  }

  componentDidMount(){
    console.log('Persons.js componentDidmount');
  }

  componentWillReceiveProps(nextProps){
    console.log('update persons.js inside componentWillReceiveProps', nextProps);
  }

/*shouldComponentUpdate(nextProps, nextState){
    console.log('update persons.js inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons
  }*/

  componentWillUpdate(nextProps, nextState){
    console.log('update persons.js inside componentWillUpdate', nextProps, nextState);
  }

  render () {
    console.log('Persons.js inside render')
    return this.props.persons.map((person, index) => {
        return <Person
          key={person.id}
          position={index}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}/>
    });
  }
}

export default Persons