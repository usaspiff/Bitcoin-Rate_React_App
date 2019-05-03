import React from "react";
import bitcoin from "../assets/bitcoin.png";

const Header = props => (
  <div className={props.className}>
    <h1 className="headerTitle">
      <img
        style={{ width: "30px" }}
        src={bitcoin}
        alt="bitcoin logo"
      />
      {props.title}
    </h1>
  </div>
);

Header.defaultProps = {
    title: "App"
};

export default Header;
