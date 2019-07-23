import React from "react"

class Button extends React.Component {
    render = () => {
        return (
            <button className='Button--seemore'>{this.props.children}</button>
        )
    }
}

export default Button