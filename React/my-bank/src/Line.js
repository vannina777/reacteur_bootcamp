import React from "react"

class Line extends React.Component {
    render = () => {
        const operations = this.props.operations
        console.log(operations);

        const operationsList = operations.map((operation, index, array) => {
            let CSSclass = 'Line--flex'

            console.log(typeof operation.amount)
            if (operation.amount < 0) {
                CSSclass += ' isRed'
            } else {
                CSSclass += ' isGreen'
            }

            return (<div className={CSSclass}>
                <h3 className="Line--date"> {operation.date}</h3>
                <h3 className="Line--motif"> {operation.description} </h3>
                <h3 className="Line--amount"> {operation.amount} €</h3>
            </div>);

        })


        return (

            <div>
                {operationsList}

            </div >

        )
    }
}

export default Line