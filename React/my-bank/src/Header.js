import React from 'react'

import User from './User.js'

class Header extends React.Component {
    render = () => {
        return (<header>
            <div className="container Header--flex">

                <h1> My Bank </h1>
                <User name='Theau' />

            </div>
        </header>
        );
    }
}

export default Header