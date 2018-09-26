import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      main: {},
      city: "London"
    };
  }
  componentDidMount() {
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
        const one = [1, 2, 3, 4, 5, 6];

        var obiekt = { klucz1: "wartosc1",klucz2: "wartosc1", klucz1: "wartosc1",klucz2: "wartosc1" };
        var args = [...obiekt];
        console.log(args)
        // TypeError: obiekt is not iterable

        this.setState({
          main
        });
        // console.log(this.state);

        // console.log(this.state.main.temp);
        // console.log(this.state.main.pressure);
        // console.log(this.state.main.humidity);
        // console.log(this.state.main.temp_min);
        // console.log(this.state.main.temp_max);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>dff</h1>
      </div>
    );
  }
}

export default App;
