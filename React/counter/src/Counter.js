import React from 'react'

class Counter extends React.Component {
    render = () => {

        return (<div className="Counter">
            <button>-</button><span className="Counter--screen"> 0 </span>
            <button>+</button>
        </div>);
    }
}

export default Counter