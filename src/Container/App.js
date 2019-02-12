import React, { Component } from "react";
import "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "ff", name: "max", age: 28 },
      { id: "er", name: "manu", age: 29 },
      { id: "rewe", name: "Kiran", age: 24 }
    ],
    otherState: "other state",
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }; //euta person object banayera cpy

    person.name = event.target.value;

    const persons = [...this.state.persons]; //sabai array cpy
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          clicked={this.togglePersonHandler}
          addTitle={this.props.appTitle}
        />
        {persons}
      </div>
    );
  }
}

export default App;
