import React from "react";
import SpecList from "./SpecList";
import macBook from "./macbook.jpeg";

class Description extends React.Component {
  state = {
    isFixed: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= 95) {
      this.setState({ isFixed: true });
    } else {
      this.setState({ isFixed: false });
    }
  };

  render = () => {
    const { options, state, onSelection } = this.props;
    const formatter = new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    const softwares = [
      {
        name: "Final Cut Pro",
        price: 329.99,
        state: "finalCut"
      },
      {
        name: "Logic Pro X",
        price: 229.99,
        state: "logicPro"
      }
    ];

    // needs to go in its own component
    const softwareElements = softwares.map((software, index) => {
      let cssOne = "SpecList--button";
      let cssTwo = "SpecList--button";

      if (state[software.state]) {
        cssTwo += " activated";
      } else {
        cssOne += " activated";
      }
      return (
        <div key={index}>
          <h1> {software.name}</h1>
          <div className="software">
            <div
              className={cssOne}
              onClick={e => {
                // call function in another component to set state there and pass as props
                e.stopPropagation();

                onSelection(software.state, false);
              }}
            >
              <p> Aucun</p>
              {cssOne.includes("activated") ? null : (
                <p> - {formatter.format(software.price)} € </p>
              )}
            </div>
            <div
              className={cssTwo}
              onClick={e => {
                e.stopPropagation();

                onSelection(software.state, true);
              }}
            >
              <p> {software.name}</p>
              {cssTwo.includes("activated") ? null : (
                <p> + {formatter.format(software.price)} € </p>
              )}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="Description--container">
        <div
          className={
            this.state.isFixed ? "Description--image" : "Description--image"
          }
        >
          <img
            src={macBook}
            alt="macbook"
            className={this.state.isFixed ? "isFixed" : ""}
          />
        </div>

        <div>
          <h3
            onClick={() => {
              onSelection("processor", 0);
            }}
          >
            Personnalisez votre MacBook Pro 15 pouces - Gris sidéral
          </h3>
          <p>{options.processor[state.processor].name}</p>

          <p>Écran Retina avec affichage True Tone </p>

          <p>Touch Bar et Touch ID </p>
          <p>{options.memory[state.memory].name}</p>
          <p> {options.gpu[state.gpu].name} </p>
          <p> {options.storage[state.storage].name} </p>
          <p> Quatre ports Thunderbolt 3</p>

          {/* DA SPEC */}
          <h1> Processeur</h1>

          <SpecList
            pieceName={"processor"}
            options={options.processor}
            state={state.processor}
            onSelection={onSelection}
          />

          <h1> Mémoire </h1>
          <SpecList
            pieceName={"memory"}
            options={options.memory}
            state={state.memory}
            onSelection={onSelection}
          />

          <h1> Graphismes</h1>
          <SpecList
            pieceName={"gpu"}
            options={options.gpu}
            state={state.gpu}
            onSelection={onSelection}
          />

          <h1> Stockage</h1>
          <SpecList
            pieceName={"storage"}
            options={options.storage}
            state={state.storage}
            onSelection={onSelection}
          />

          <h5> Logiciels préinstallés</h5>
          {softwareElements}
        </div>
      </div>
    );
  };
}

export default Description;
