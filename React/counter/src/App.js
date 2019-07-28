import React from 'react';


class App extends React.Component {

  state = { counterA: 0, counterB: 0, counterC: 0, total: 0 }

  render = () => {

    // button 1

    let buttonAddA = <button onClick={() => {
      this.setState({ counterA: this.state.counterA + 1, total: this.state.total + 1 })
    }} > +</button >

    if (this.state.counterA >= 10) {
      buttonAddA = null
    }

    let buttonSubA = <button onClick={() => {
      this.setState({ counterA: this.state.counterA - 1, total: this.state.total - 1 })
    }} > -</button >

    if (this.state.counterA <= 0) {
      buttonSubA = null
    }



    //buttons B

    let buttonAddB = <button onClick={() => {
      this.setState({ counterB: this.state.counterB + 1, total: this.state.total + 1 })
    }} > +</button >

    if (this.state.counterB >= 10) {
      buttonAddB = null
    }

    let buttonSubB = <button onClick={() => {
      this.setState({ counterB: this.state.counterB - 1, total: this.state.total - 1 })
    }} > -</button >

    if (this.state.counterB <= 0) {
      buttonSubB = null
    }

    // buttons C

    let buttonAddC = <button onClick={() => {
      this.setState({ counterC: this.state.counterC + 1, total: this.state.total + 1 })
    }} > +</button >

    if (this.state.counterC >= 10) {
      buttonAddC = null
    }

    let buttonSubC = <button onClick={() => {
      this.setState({ counterC: this.state.counterC - 1, total: this.state.total - 1 })
    }} > -</button >

    if (this.state.counterC <= 0) {
      buttonSubC = null
    }


    // block at 18 -- not good, need to refactor

    if (this.state.total >= 18) {
      buttonAddA = null;
      buttonAddB = null;
      buttonAddC = null;
    }

    // declare a boolean with the button JSX as an argument (that is true ) so if left is true -> passes the element to the right



    return (
      <div className="container" >


        <h1> Etape 5 {this.props.name}</h1>
        <div className="Counter">
          <div>
            {buttonSubA}

            <span className="Counter--screen"> {this.state.counterA} </span>

            {buttonAddA}
          </div>

          <div>
            {buttonSubB}

            <span className="Counter--screen"> {this.state.counterB} </span>

            {buttonAddB}
          </div>

          <div>
            {buttonSubC}

            <span className="Counter--screen"> {this.state.counterC} </span>

            {buttonAddC}
          </div>

          <h1> Total: {this.state.total}</h1>

        </div>

      </div>


    )
  }
}

export default App;
