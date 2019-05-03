import React, { Component } from "react";
import './App.css'; 
import Header from "./components/Header.js";
import Table from "./components/Table.js";
import Footer from "./components/Footer.js";

//Get today's date in YYYY-MM-DD format
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() < 10 ?  "0" + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1;
let currentDay = currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate();
let todayDate = currentYear + "-" + currentMonth + "-" + currentDay;


class App extends Component {
  state = {
    rates: [],
    dates: [],
    today: "",
  };


  async componentDidMount() {
    /* ************CHECK LOCAL STORAGE******************** */    
    if (
      localStorage.getItem("today") !== null
      &&
      JSON.parse(localStorage.getItem("today")) === todayDate)
     {
      const savedRates = JSON.parse(localStorage.getItem("rates"));
      const savedDates = JSON.parse(localStorage.getItem("dates"));
      this.setState({
        rates: savedRates,
        dates: savedDates,
        today: todayDate
      });
      console.log("BPI data is already up-to-date!")
    } else {
      /* ************CHECK LOCAL STORAGE******************** */
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
          dates: json__dates,
          today: todayDate
        });
        console.log("Fresh BPI data fetched!")
      } catch (error) {
        console.log(error);
      }
    }
  }

  /* ************UPDATE LOCAL STORAGE******************** */
  componentDidUpdate() {
    localStorage.setItem("rates", JSON.stringify(this.state.rates));
    localStorage.setItem("dates", JSON.stringify(this.state.dates));
    localStorage.setItem("today", JSON.stringify(this.state.today));
  }
  /* ************UPDATE LOCAL STORAGE******************** */

  render() {
    const { rates, dates } = this.state;

    return (
      <div className="appStyle">
        <Header title="itcoin Price Index" className="header" />
        <Table rates={rates} dates={dates} />
        <Footer />
      </div>
    );
  }
}

export default App;
