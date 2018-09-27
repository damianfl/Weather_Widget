import React, { Component } from "react";

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
      city: "London"
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
          sys
        });
        console.log(this.state)
      });
  };

  handler = e => {
    this.setState({
      city: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <input value={this.state.city} onChange={this.handler} type="text" />
        <button onClick={this.fetchData} type="submit">
          submit button
        </button>
        <h1>Country: {this.state.sys.country}</h1>
        <h1>Temperature: {this.state.main.temp/32*5/9} Celsius</h1>
      </div>
    );
  }
}

export default App;
