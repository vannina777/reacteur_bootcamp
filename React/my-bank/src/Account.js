import React from "react"

import Line from './Line'
import Button from './Button'

class Account extends React.Component {
    render = () => {
        return (
            <div>
                <div className={this.props.headerClass}>
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