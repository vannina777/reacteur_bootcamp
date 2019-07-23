import React from "react";
import ReactDOM from "react-dom";


import './styles/reset.css';
import "./styles/index.css";

import Header from "./Header.js"
import Test from "./Test.js"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => {

        return (
            <div>
                <Header />
                <Test />
            </div>
        );
    };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
