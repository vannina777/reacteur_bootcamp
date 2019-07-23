import React from 'react'


class Header extends React.Component {
    render() {
        return (
            <header>
                {/* <h1> Theau Poulat </h1> */}
                <menu>

                    <ol class="Header--menu">
                        <li> About </li>
                        <li> Projects </li>
                        <li> Skills </li>
                        <li> Contact </li>
                    </ol>
                    <ol class="Header--social">
                        <i> GITHUB</i>
                        <i> LinkedIn</i>
                    </ol>
                </menu>
            </header>
        );
    }
}

export default Header