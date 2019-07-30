import React from "react";
import Axios from "axios";

class Popular extends React.Component {
  state = {
    data: [],
    isLoading: false,
    page: 1 // change here
  };
  componentDidMount = async () => {
    this.setState({ isLoading: true });
    const response = await Axios.get(
      "https://api-allocine.herokuapp.com/api/movies/popular"
    );
    console.log("this is axios" + response.data["results"]);
    this.setState({ data: response.data.results, isLoading: false });
  };

  render = () => {
    console.log(this.state.data);
    const objects = this.state.data.map((curr, index) => {
      return (
        <div key={curr.id} className="Card">
          <div>
            <img
              src={
                "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
                curr.poster_path
              }
            />
          </div>
          <div className="Card-text">
            <h1> {curr.title}</h1>
            <h2> {curr.release_date}</h2>
            <p> {curr.overview}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="Main-display">
        {objects}
        <button
          onClick={() => {
            console.log("I go next page");
          }}
        >
          {" "}
          NEXT{" "}
        </button>
      </div>
    );
  };
}

export default Popular;
