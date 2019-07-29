import React from "react";

// for hide 0 use comparisons

class SpecList extends React.Component {
  render = () => {
    const formatter = new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    const { options, state, onSelection, pieceName } = this.props;

    // create elements
    const specElements = options.map((component, index) => {
      let actualPrice = options[state].price;
      let displayElementPrice = component.price - actualPrice;
      let css = "SpecList--button";

      if (state === index) {
        css = css + " activated";
      }

      return (
        <div
          key={index}
          className={css}
          onClick={e => {
            e.stopPropagation();
            onSelection(pieceName, index);
          }}
        >
          <p> {component.name}</p>
          {displayElementPrice === 0 ? null : displayElementPrice > 0 ? (
            <p>+ {formatter.format(displayElementPrice)} € </p>
          ) : (
            <p>- {formatter.format(Math.abs(displayElementPrice))} € </p>
          )}
        </div>
      );
    });
    return <div>{specElements}</div>;
  };
}

export default SpecList;
