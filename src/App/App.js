import React, { Component } from "react";
import "./App.scss";
import Widget1 from "./../Widget1/Widget1";
import Widget2 from "./../Widget2/Widget2";
import Widget3 from "./../Widget3/Widget3";

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
      citysel: "Warsaw",
      icon: ""
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
        alert("type a proper city name");
      });
  };

  handler = e => {
    this.setState({
      city: e.target.value
    });
  };

  render() {
    const id = this.state.weather.id;
    if (
      [200, 201, 202, 210, 211, 212, 221, 230, 231, 232].indexOf(
        this.state.weather.id
      ) !== -1
    ) {
      this.state.icon = (
        <img src="https://openweathermap.org/img/w/11d.png" alt="empty" />
      );
    } else if (
      [300, 301, 302, 310, 311, 312, 313, 314, 321].indexOf(id) !== -1
    ) {
      this.state.icon = (
        <img src="https://openweathermap.org/img/w/09d.png" alt="empty" />
      );
    } else if ([500, 501, 502, 503, 504].indexOf(id) !== -1) {
      this.state.icon = (
        <img src="https://openweathermap.org/img/w/10d.png" alt="empty" />
      );
    } else if ([511].indexOf(id) !== -1) {
      this.state.icon = (
        <img src="https://openweathermap.org/img/w/13d.png" alt="empty" />
      );
    } else if ([520, 521, 522, 531].indexOf(id) !== -1) {
      this.state.icon = (
        <img src="https://openweathermap.org/img/w/09d.png" alt="empty" />
      );
    } else if (
      [600, 601, 602, 611, 612, 615, 616, 620, 621, 622].indexOf(id) !== -1
    ) {
      this.state.icon = (
        <img src="https://openweathermap.org/img/w/13d.png" alt="empty" />
      );
    } else if (
      [701, 711, 721, 731, 741, 751, 761, 762, 771, 781].indexOf(id) !== -1
    ) {
      this.state.icon = (
        <img src="https://openweathermap.org/img/w/50d.png" alt="empty" />
      );
    } else if ([800].indexOf(id) !== -1) {
      this.state.icon = (
        <img src="https://openweathermap.org/img/w/01d.png" alt="empty" />
      );
    } else if ([801, 802, 803, 804].indexOf(id) !== -1) {
      this.state.icon = (
        <img src="https://openweathermap.org/img/w/13d.png" alt="empty" />
      );
    }
    console.log(this.state.icon);
    return (
      <div className="App">
        <div className="wrapper">
          <Widget1
            temp={Math.round(Number(this.state.main.temp) - 273.15)}
            wind={this.state.wind.speed}
            humidity={this.state.main.humidity}
            pressure={this.state.main.pressure}
            city={this.state.city}
            country={this.state.sys.country}
            weather={this.state.weather.description}
            id={this.state.weather.id}
            citysel={this.state.citysel}
            handler={this.handler}
            fetch={this.fetchData}
            icon={this.state.icon}
          />
          <Widget2
            temp={Math.round(Number(this.state.main.temp) - 273.15)}
            citysel={this.state.citysel}
            country={this.state.sys.country}
            weather={this.state.weather.description}
            icon={this.state.icon}
          />
          <Widget3
            temp={Math.round(Number(this.state.main.temp) - 273.15)}
            citysel={this.state.citysel}
            country={this.state.sys.country}
            icon={this.state.icon}
          />
        </div>
      </div>
    );
  }
}

export default App;
