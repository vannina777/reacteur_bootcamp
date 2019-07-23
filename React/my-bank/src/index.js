import React from 'react';
import ReactDOM from 'react-dom';


import * as serviceWorker from './serviceWorker';


import './styles/reset.css';
import './styles/index.css';

import Header from './Header';
import Accounts from './Accounts'

const data = [
    {
        name: 'Courant',
        balance: 1205.67,
        color: '#1976D2',
        operations: [
            {
                date: '20/07/2019',
                description: 'SPOTIFY',
                amount: -9.99,
            },
            {
                date: '18/07/2019',
                description: 'CARREFOUR MARKET',
                amount: -23.56,
            },
            {
                date: '18/07/2019',
                description: 'DAB',
                amount: -50.0,
            },
            {
                date: '16/07/2019',
                description: 'SALAIRE',
                amount: 2183,
            },
        ],
    },
    {
        name: 'Livret A',
        balance: 6300,
        color: '#C2185B',
        operations: [
            {
                date: '15/07/2019',
                description: 'MACBOOK',
                amount: -3500,
            },
            {
                date: '01/07/2019',
                description: 'EPARGNE',
                amount: 500,
            },
            {
                date: '01/06/2019',
                description: 'EPARGNE',
                amount: 500,
            },
            {
                date: '01/05/2019',
                description: 'EPARGNE',
                amount: 1000,
            },
        ],
    },
];

class App extends React.Component {

    render = () => {
        return (<div>
            <Header />
            <Accounts data={data} />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
