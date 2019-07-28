import React from "react"

import Account from './Account'

class Accounts extends React.Component {
    render = () => {
        const accounts = this.props.data

        const accountsList = accounts.map((account, index, array) => {
            return (<Account data={this.props.data[index]} />)
        })

        return (
            <div className='Accounts--main'>
                <div className="container">
                    {accountsList}

                </div>

            </div>
        )
    }
}

export default Accounts
