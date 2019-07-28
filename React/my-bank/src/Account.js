import React from "react"

import Line from './Operation'
import Button from './Button'

class Account extends React.Component {
    render = () => {
        return (
            <div>
                <div className="Account--header" style={this.props.data.color}>
                    <h2> {this.props.data.name}</h2>
                    <h2> {this.props.data.balance} €</h2>
                </div>
                <div className="Account--lines">
                    <Line operations={this.props.data.operations} />
                    <Button>SEE MORE</Button>
                </div>
            </div>

        )
    }
}

export default Account
