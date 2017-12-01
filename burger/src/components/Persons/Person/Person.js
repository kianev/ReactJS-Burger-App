import React, { Component } from 'react'
import classes from './Person.css'
import PropTypes from 'prop-types'

class Person extends Component {
  constructor (props) {
    super(props)
    console.log('Person.js inside constructor', props)
  }

  componentWillMount () {
    console.log('Person.js componentwillmount')
  }

  componentDidMount () {
    console.log('Person.js componentDidmount');
    if(this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render () {
    console.log('Person.js inside render')
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>My name is {this.props.name} and my age is {this.props.age}</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={(inp) => {this.inputElement = inp}}/>
      </div>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default Person
