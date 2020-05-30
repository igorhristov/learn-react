import React from 'react';
import PersonApp from './person/PersonApp';
import Game from './tictactoe/Game';
import Calculator from './calculator/Calculator';

class MainApp extends React.Component {
    render() {
        return (
            <main className='App-main'>
                <h2>Main</h2>
                <Calculator />
                <PersonApp />

                <h2>Tic Tac Toe Game</h2>
                <Game />
            </main>
        );
    }
}

export default MainApp;
