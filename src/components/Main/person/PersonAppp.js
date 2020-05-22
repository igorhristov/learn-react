import React from "react";
import Person from "./components/Person";
class PersonApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          firstName: "",
          lastName: "",
          age: "",
        },
      ],
      persons: [
        { firstName: "Gandalf", lastName: "White", age: "1500" },
        { firstName: "John", lastName: "Doe", age: "56" },
        { firstName: "Jane", lastName: "Doe", age: "000" },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlePersonChange(prop, val) {
    this.setState({
      person: {
        ...this.state.person,
        ...{
          [prop]: val,
        },
      },
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { person } = this.state;
    this.setState({
      person: {
        firstName: "",
        lastName: "",
        age: "",
      },
      persons: [...this.state.persons, person],
    });
  }
  render() {
    return (
      <main className="App-main">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="FirstName"
            value={this.state.persons.firstName}
            onChange={(event) =>
              this.handlePersonChange("firstName", event.target.value)
            }
          />
          <input
            type="text"
            name="LastName"
            value={this.state.persons.lastName}
            onChange={(event) =>
              this.handlePersonChange("lastName", event.target.value)
            }
          />
          <input
            type="text"
            name="age"
            value={this.state.persons.age}
            onChange={(event) =>
              this.handlePersonChange("age", event.target.value)
            }
          />
          <input type="submit" />
        </form>
        {this.state.persons.map(({ firstName, lastName, age }) => (
          <Person firstName={firstName} lastName={lastName} age={age} />
        ))}
      </main>
    );
  }
}
export default PersonApp;