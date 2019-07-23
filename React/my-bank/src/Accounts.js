import React from "react"

import Account from './Account'

class Accounts extends React.Component {
    render = () => {
        const accounts = this.props.data

        const accountsList = accounts.map((account, index, array) => {
            let CSSclass = 'Account--header'
            if (index % 2 !== 0) {
                CSSclass += ' isPink'
            }
            return (<Account data={this.props.data[index]} headerClass={CSSclass} />)
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