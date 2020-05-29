import React from 'react';
import Person from './Person';
import FormComponent from './Form';
import PersonData from './data';

class MainApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person: { firstName: '', lastName: '', age: '' },
            persons: PersonData,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { person } = this.state;

        const persons =
            !person.ix && person.ix !== 0
                ? [...this.state.persons, person] // new person
                : this.state.persons.map((p, ix) => (ix === person.ix ? person : p)); // update existing

        this.setState({
            person: {
                firstName: '',
                lastName: '',
                age: '',
            },
            persons,
        });
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

    handleDeletePerson(deleteIx) {
        this.setState({
            persons: this.state.persons.filter((_, ix) => {
                return deleteIx !== ix;
            }),
        });
    }

    handleEditPerson(ix) {
        this.setState({
            person: {
                ...this.state.persons[ix],
                ix,
            },
        });
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='App-person text-center'>
                    <FormComponent
                        person={this.state.person}
                        firstName={this.state.person.firstName}
                        lastName={this.state.person.lastName}
                        age={this.state.person.age}
                        handlePersonFirstName={e =>
                            this.handlePersonChange('firstName', e.target.value)
                        }
                        handlePersonLastName={e =>
                            this.handlePersonChange('lastName', e.target.value)
                        }
                        handlePersonAge={e => this.handlePersonChange('age', e.target.value)}
                        handleSubmit={this.handleSubmit}
                    />

                    {this.state.persons.map(({ firstName, lastName, age }, ix) => (
                        <div className='mb-2' key={firstName + lastName + age}>
                            <Person
                                firstName={firstName}
                                lastName={lastName}
                                age={age}
                                handleEditPerson={() => this.handleEditPerson(ix)}
                                handleDeletePerson={() => this.handleDeletePerson(ix)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default MainApp;
