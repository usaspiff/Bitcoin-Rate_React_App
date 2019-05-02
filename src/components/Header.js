import React from "react";

const Header = props => <h1 className={props.className}>{props.title}</h1>;

Header.defaultProps = {
    title: "App"
};

export default Header;
