import React from "react";

class Pagination extends React.Component {
  paginationCreation = pagesNumber => {
    const pages = [];
    for (let i = 0; i <= pagesNumber; i++) {
      pages.push(<span key={i}> {i + 1}</span>);
    }
    return pages;
  };
  render = () => {
    const { count, getPaginationUrl } = this.props;
    console.log(count);
    const pagesNumber = Math.floor(count / 25);
    //const pages = this.paginationCreation(pagesNumber);
    const pages = [];
    for (let i = 0; i < pagesNumber; i++) {
      pages.push(
        <span
          className="Pagination--counter"
          key={i}
          onClick={() => {
            getPaginationUrl(i);
          }}
        >
          {" "}
          {i + 1}
        </span>
      );
    }
    console.log(pages);

    return (
      <div>
        <span> - </span>
        {pages}
        <span> + </span>
      </div>
    );
  };
}

export default Pagination;
