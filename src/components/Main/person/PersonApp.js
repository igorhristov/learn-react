import React from 'react';
import Person from './Person';
import Button from './Button';

class MainApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person: { firstName: '', lastName: '', age: '' },
            persons: [
                { firstName: 'Gandalf', lastName: 'White', age: '1500' },
                { firstName: 'John', lastName: 'Doe', age: '56' },
                { firstName: 'Alex', lastName: 'Malex', age: '666' },
            ],
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
                    <form onSubmit={this.handleSubmit} className='mb-3 mr-sm-5'>
                        <div className='form-group row align-items-center'>
                            <label for='firstName' class='col-sm-3 col-form-label text-sm-right'>
                                First Name:
                            </label>
                            <div className='col-sm-9'>
                                <input
                                    onChange={(e) =>
                                        this.handlePersonChange('firstName', e.target.value)
                                    }
                                    value={this.state.person.firstName}
                                    className='form-control'
                                    type='text'
                                    name='firstName'
                                />
                            </div>
                        </div>

                        <div className='form-group row align-items-center'>
                            <label for='lastName' class='col-sm-3 col-form-label text-sm-right'>
                                Last Name:
                            </label>
                            <div className='col-sm-9'>
                                <input
                                    onChange={(e) =>
                                        this.handlePersonChange('lastName', e.target.value)
                                    }
                                    value={this.state.person.lastName}
                                    className='form-control'
                                    type='text'
                                    name='lastName'
                                />
                            </div>
                        </div>

                        <div className='form-group row align-items-center'>
                            <label for='Age' class='col-sm-3 col-form-label text-sm-right'>
                                Age:
                            </label>
                            <div className='col-sm-9'>
                                <input
                                    onChange={(e) => this.handlePersonChange('age', e.target.value)}
                                    value={this.state.person.age}
                                    className='form-control'
                                    type='number'
                                    name='age'
                                />
                            </div>
                        </div>

                        <div className='text-sm-right'>
                            <button type='submit' className='btn btn-primary'>
                                {!this.state.person.ix && this.state.person.ix !== 0
                                    ? 'Create New Person'
                                    : 'Update Person'}
                            </button>
                        </div>

                        <hr className='w-100 h-3' />
                    </form>

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
