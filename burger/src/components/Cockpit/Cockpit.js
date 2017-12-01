import React from 'react';
import classes from './Cockpit.css';
import AuxComponent from '../../hoc/AuxComponent';

const Cockpit = (props) => {
  const assignedClasses = [];

  let btnClass = '';
  if(props.showPersons){
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return(
    <AuxComponent>
    <div className={classes.Cockpit}>
      <h1>Hi I am a React App</h1>
      <p className={assignedClasses.join(' ')}>this is working</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
    </AuxComponent>
  );
};

export default Cockpit;