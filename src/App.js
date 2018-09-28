import React, { Component } from "react";
import "./reset.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      main: {},
      coords: {},
      weather: {},
      wind: {},
      sys: {},
      city: "Warsaw",
      citysel: "Warsaw"
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        this.state.city
      }&APPID=d7a6b50fea2a903ec993607283d679d1`
    )
      .then(resp => {
        return resp.json();
      })
      .then(obj => {
        const main = obj.main;
        const coords = obj.coord;
        const weather = obj.weather[0];
        const wind = obj.wind;
        const sys = obj.sys;

        this.setState({
          main,
          coords,
          weather,
          wind,
          sys,
          citysel: this.state.city
        });
        console.log(this.state);
      })
      .catch(err => {
        alert("type a prope city name");
      });
  };

  handler = e => {
    this.setState({
      city: e.target.value
    });
  };

  render() {
    const temp = Math.round(Number(this.state.main.temp) - 273.15);
    const wind = this.state.wind.speed;
    const humidity = this.state.main.humidity;
    const pressure = this.state.main.pressure;
    const city = this.state.city;
    const country = this.state.sys.country;
    const weather = this.state.weather.description;
    const id = this.state.weather.id;
    const citysel = this.state.citysel;
    console.log(id);

    let img;
    if ([200, 201, 202, 210, 211, 212, 221, 230, 231, 232].indexOf(id) !== -1) {
      img = <img src="http://openweathermap.org/img/w/11d.png" />;
    } else if (
      [300, 301, 302, 310, 311, 312, 313, 314, 321].indexOf(id) !== -1
    ) {
      img = <img src="http://openweathermap.org/img/w/09d.png" />;
    } else if ([500, 501, 502, 503, 504].indexOf(id) !== -1) {
      img = <img src="http://openweathermap.org/img/w/10d.png" />;
    } else if ([511].indexOf(id) !== -1) {
      img = <img src="http://openweathermap.org/img/w/13d.png" />;
    } else if ([520, 521, 522, 531].indexOf(id) !== -1) {
      img = <img src="http://openweathermap.org/img/w/09d.png" />;
    } else if (
      [600, 601, 602, 611, 612, 615, 616, 620, 621, 622].indexOf(id) !== -1
    ) {
      img = <img src="http://openweathermap.org/img/w/13d.png" />;
    } else if (
      [701, 711, 721, 731, 741, 751, 761, 762, 771, 781].indexOf(id) !== -1
    ) {
      img = <img src="http://openweathermap.org/img/w/50d.png" />;
    } else if ([800].indexOf(id) !== -1) {
      img = <img src="http://openweathermap.org/img/w/01d.png" />;
    } else if ([801, 802, 803, 804].indexOf(id) !== -1) {
      img = <img src="http://openweathermap.org/img/w/13d.png" />;
    }

    return (
      <div className="App">
        <div className="wrapper">
          <div className="widget">
            {/* HEADER */}
            <div className="header">
              <div className="header--item__one">
                <div className="header--item__one--inner">
                  <p> {citysel}</p>
                  <p>
                    {country}, {weather}
                  </p>
                </div>
              </div>
              <div className="header--item__two">{img}</div>
            </div>

            {/* MAIN  */}

            <div className="main">
              <div className="main--item__one">
                <p>
                  {temp}
                  &#8451;
                </p>
              </div>
              <div className="main--item__two">
                <p className="details">Details:</p>
                <br />
                <p>
                  <span>temp:</span>{" "}
                  <span>
                    {temp}
                    &#8451;
                  </span>
                </p>
                <p>
                  <span>wind:</span>{" "}
                  <span>
                    {wind}
                    m/s
                  </span>
                </p>
                <p>
                  <span>Humidity:</span> <span>{humidity}%</span>
                </p>
                <p>
                  <span>Pressure:</span>
                  <span> {pressure} hPa</span>
                </p>
              </div>
            </div>
            {/*USER INPUT */}
            <div className="userInput">
              <input value={city} onChange={this.handler} type="text" />
              <button onClick={this.fetchData} type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
