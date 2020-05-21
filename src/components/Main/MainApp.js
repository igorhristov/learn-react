import React from 'react';
import PersonApp from './person/PersonApp';

class MainApp extends React.Component {
    render() {
        return (
            <main className='App-main'>
                <h2>Main</h2>
                <PersonApp/>
            </main>
        );
    }
}

export default MainApp;
