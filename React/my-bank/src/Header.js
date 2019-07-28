import React from 'react'

import Logo from './LogoRevolut.png'
import User from './User.js'

class Header extends React.Component {
    render = () => {
        return (<header>
            <div className="container Header--flex">

                <img src={Logo} alt='Logo'></img>
                <User name='Theau' />

            </div>
        </header>
        );
    }
}

export default Header