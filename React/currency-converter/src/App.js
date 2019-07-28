import React from 'react';

class App extends React.Component {



  state = {
    display1: 0,
    display2: 0,
    currency1: "EUR",
    currency2: "AED"
  }

  render = () => {
    const { rates } = this.props

    let selectOptions = Object.keys(rates).map((key, index) => {
      return <option key={key} value={key}>{key}</option>
    })

    const calculateFxForDisplay2 = (x) => {
      const display1Value = x;

      const multiplicator = rates[this.state.currency2];

      const currency = rates[this.state.currency1];

      const newDisplay2Value = display1Value * (multiplicator / currency);
      console.log("display1 :", display1Value, "currency2 :", multiplicator, "currency1 :", currency, "expected display2 :", newDisplay2Value)

      this.setState(() => {
        return { display2: newDisplay2Value }
      })

    }

    const calculateFxForDisplay1 = (x) => {
      const display2Value = x;

      const multiplicator = rates[this.state.currency1];

      const currency = rates[this.state.currency2];

      const newDisplay1Value = display2Value * (multiplicator / currency);
      console.log(display2Value, multiplicator, currency, newDisplay1Value)

      this.setState(() => {
        return { display1: newDisplay1Value }
      })

    }


    return (
      <form>

        {/* INPUT 1 */}
        <input type="number" value={this.state.display1} onChange={(event) => {
          let inputValue = event.target.value;
          this.setState(prevState => {
            return { display1: inputValue }
          })
          calculateFxForDisplay2(inputValue)
        }}></input>

        {/* SELECTOR 1 */}
        <select value={this.state.currency1} onChange={(event) => {

          const selectedValue = event.target.value
          this.setState({ currency1: selectedValue }, () => { calculateFxForDisplay2(this.state.display1) })



        }}>
          {selectOptions}
        </select>

        =
          {/* INPUT 2 */}
        <input type="number" value={this.state.display2} onChange={(event) => {
          let inputValue = event.target.value;
          this.setState(prevState => {
            return { display2: inputValue }
          })

          calculateFxForDisplay1(inputValue);


        }}>

        </input>
        {/* SELECTOR 2 */}
        <select value={this.state.currency2} onChange={(event) => {

          const selectedValue = event.target.value
          this.setState({ currency2: selectedValue }, () => {
            calculateFxForDisplay2(this.state.display1)

          })
        }}>
          {selectOptions}
        </select>

      </form >
    )
  }
}

export default App;
