import React from "react";
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";

const Footer = () => (
  <>
    <p className="footer">
      Made with the{" "}
      <b>
        <a href="https://www.coindesk.com/api">CoinDesk API</a>
      </b>
      .
      <br />
      Nick Tchemitcheff
      <br />
      2019
      <br />
      <a href="https://github.com/usaspiff/Bitcoin-Rate_React_App">
        <img
          style={{ marginTop: "10px" }}
          src={githubLogo}
          alt="link to github"
        />
      </a>
    </p>
  </>
);

export default Footer;
