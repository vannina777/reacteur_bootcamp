import React from "react";
import Axios from "axios";

class Upcoming extends React.Component {
  state = {
    data: [],
    isLoading: false,
    page: 1 // change here
  };

  getData = async () => {
    const url =
      "https://api-allocine.herokuapp.com/api/movies/upcoming/?p=" +
      parseInt(this.state.page);
    this.setState({ isLoading: true });
    const response = await Axios.get(url);
    console.log("this is axios" + response.data["results"]);
    this.setState({ data: response.data.results, isLoading: false });
  };

  componentDidMount = async () => {
    this.getData();
  };

  buttonHandling = sign => {
    if (sign === "next") {
      this.setState({ page: this.state.page + 1 }, () => {
        this.getData();
      });
    } else if (sign === "previous") {
      this.setState({ page: this.state.page - 1 }, () => {
        this.getData();
      });
    }
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
        {this.state.page > 1 && (
          <button
            onClick={() => {
              this.buttonHandling("previous");
            }}
          >
            PEVIOUS
          </button>
        )}
        <button
          onClick={() => {
            this.buttonHandling("next");
          }}
        >
          NEXT
        </button>
      </div>
    );
  };
}

export default Upcoming;
