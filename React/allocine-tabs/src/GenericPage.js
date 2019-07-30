import React from "react";
import Axios from "axios";

class GenericPage extends React.Component {
  _isMounted = false;

  state = {
    data: [],
    isLoading: false,
    page: 1
  };

  getData = async () => {
    const url =
      "https://api-allocine.herokuapp.com/api/movies/" +
      this.props.pageName +
      "?p=" +
      parseInt(this.state.page);
    this.setState({ isLoading: true });
    const response = await Axios.get(url);
    console.log("this is axios" + response.data["results"]);
    if (this._isMounted === true) {
      this.setState({ data: response.data.results, isLoading: false });
    }
  };

  componentDidMount = async () => {
    this._isMounted = true;
    this.getData();
  };

  componentWillUnmount = () => {
    this._isMounted = false;
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
              alt="poster"
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

export default GenericPage;
