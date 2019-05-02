import React, { Component } from "react";
import './App.css'; 
import Header from "./components/Header.js";
import Table from "./components/Table.js";
import Footer from "./components/Footer.js";

class App extends Component {
  state = {
    rates: [],
    dates: []
  };
  async componentDidMount() {
    try {
      const response = await fetch(
        `https://api.coindesk.com/v1/bpi/historical/close.json`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }

      const json = await response.json();

      const json__rates = Object.values(Object.values(json)[0]).reverse();
      // console.log(json__rates);
      const json__dates = Object.keys(Object.values(json)[0]).reverse();
      // console.log(json__dates);

      this.setState({
        rates: json__rates,
        dates: json__dates
      });
      // console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { rates, dates } = this.state;

    return (
      <div className="appStyle">
        <Header title="Bitcoin Price Index" className="header" />
        <Table rates={rates} dates={dates} />
        <Footer />
      </div>
    );
  }
}

export default App;
