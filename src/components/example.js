import React, { Component } from 'react';
import classes from '../App.css';

import Persons from './persons/person'

class Example extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Maggi'},
      { id: 'vasdf1', name: 'chocolate' },
      { id: 'asdf11', name: 'icecreame' }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    let persons = null;
    const style = {
        backgroundColor:'green',
        color:"white",
        font:'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover':{
          backgroundColor:'red',
          color:'black'
        }
      };

    if ( this.state.showPersons ) {
      persons = (
        <div>
        <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        /> 
        </div>
      );

      style.backgroundColor='red';
    }

    const assignedClasses = [];
    if ( this.state.persons.length <= 2 ) {
      assignedClasses.push( 'red'); // classes = ['red']
    }
    if ( this.state.persons.length <= 1 ) {
      assignedClasses.push( 'bold' ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join( ' ' )}>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Example;