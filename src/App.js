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
    // this.setState({ customText: event.target.value });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };

    let persons;
    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => (
        <Person
          changed={this.nameChangedHandler}
          click={() => this.deletePersonHandler(index)}
          key={person.id}
          name={person.name}
          age={person.age}
        />
      ));
    }
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Testing CSS</p>
        <button
          style={style}
          onClick={() => this.togglePersonsHandler("ssssss")}
        >
          Submit
        </button>

        <Person
          customText={this.state.customText}
          //   changed={this.nameChangedHandler}
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
