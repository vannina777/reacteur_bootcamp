import React from 'react'

import UserIcon from "./UserIcon"

class User extends React.Component {
    render = () => {
        return (
            <div className='User--tab'>
                <h4>{this.props.name} </h4>
                <UserIcon />
            </div>

        );
    }
}

export default User