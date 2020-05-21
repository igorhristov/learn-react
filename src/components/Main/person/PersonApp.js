import React from 'react';
import Person from './Person';
const persons = [
    { firstName: 'Gandalf', lastName: 'White', age: '1500' },
    { firstName: 'John', lastName: 'Doe', age: '56' },
    { firstName: 'Igor', lastName: 'Hristov', age: '666' },
];
const personComp = persons.map((person) => {
    return <Person firstName={person.firstName} lastName={person.lastName} age={person.age} />;
});
class MainApp extends React.Component {
    render() {
        return (
            <div className='App-person'>
                {personComp}
            </div>
        );
    }
}

export default MainApp;
