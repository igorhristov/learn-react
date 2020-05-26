import React from 'react';
import PersonApp from './person/PersonApp';
import Tutorial from './tutorial/App';

class MainApp extends React.Component {
    render() {
        return (
            <main className='App-main'>
                
                <h2>Main</h2>
                <PersonApp />
                <Tutorial/>
            </main>
        );
    }
}

export default MainApp;
