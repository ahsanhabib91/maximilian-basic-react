import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "aaa", age: "11" },
      { id: "2", name: "bbb", age: "22" },
      { id: "3", name: "ccc", age: "33" },
      { id: "4", name: "ddd", age: "44" }
    ],
    showPersons: false,
    customText: "Custom"
  };

  switchHandler = newName => {
    console.log("asdf", newName);
  };

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  };

  deletePersonHandler = personIndex => {
    console.log(personIndex);
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  nameChangedHandler = (event, id) => {
    console.log(event.target.value, id);
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons;
    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => (
        <Person
          changed={event => this.nameChangedHandler(event, person.id)}
          click={() => this.deletePersonHandler(index)}
          key={person.id}
          name={person.name}
          age={person.age}
        />
      ));
      style.backgroundColor = "red";
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <div className="App">
        <h1>React App</h1>
        <p className={classes.join(" ")}>Testing CSS</p>
        <button
          style={style}
          onClick={() => this.togglePersonsHandler("ssssss")}
        >
          Submit
        </button>

        <Person
          customText={this.state.customText}
          changed={this.nameChangedHandler}
          click={() => this.switchHandler("wwwww")}
          name="eee"
          age="55"
        >
          I am a developer
        </Person>

        {persons}
      </div>
    );
  }
}

export default App;
