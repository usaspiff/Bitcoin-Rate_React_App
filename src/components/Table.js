import React from "react";

const Table = props => {
  const date = props.dates;
  const columnDates = date.map((day, index) => {
    return (
      <p key={index} className="columnDate">
        {day}
      </p>
    );
  });

  const rate = props.rates;
  const columnRates = rate.map((usd, index) => {
    const rateStyle = {
      width: `${usd * 0.04}px`,
      textAlign: "left",
      paddingLeft: "10px"
    };
    return (
      <p key={index} className="columnRate" style={rateStyle}>
        $ {usd.toFixed(2)}
      </p>
    );
  });

  return (
    <>
      <h4 className="description">
        Bitcoin price (USD) over the past 31 days.
      </h4>
      <div className="row">
        <div className="columnLeft">
          <h2>Dates</h2>
          {columnDates}
        </div>
        <div className="columnRight">
          <h2>Rates</h2>
          {columnRates}
        </div>
      </div>
    </>
  );
};

export default Table;
