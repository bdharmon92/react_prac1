import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
import classes from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  };

  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  };

  componentDidMount() {
    console.log("[App.js] componentdidMount");
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  };

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {

    console.log("[App.js] render");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Auxiliary>
        <button onClick={() => { this.setState({ showCockpit: false }); }}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} /> : null}
        {persons}
      </Auxiliary>
    );
  };
};

export default withClass(App, classes.App);