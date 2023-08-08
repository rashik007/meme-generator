import React from "react";

function Header(props) {
  return (
    <div>
      <h1> Current User: {props.user}</h1>
      <header className="header">
        <img src="/images/Troll.png" className="header--image" />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </header>
    </div>
  );
}

export default Header;
